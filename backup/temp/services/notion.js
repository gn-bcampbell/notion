const dotenv = require('dotenv').config();
const {Client} = require('@notionhq/client');


//init client
const notion = new Client  ({ 
    auth: process.env.NOTION_ACCESS_TOKEN 
});

const database_id = process.env.NOTION_DATABASE_ID;

module.exports = async function getBlogs() {
    const payload = {
        path: `databases/${database_id}/query`,
        method: 'POST'
    }
    const { results } = await notion.request(payload)
    const blogs = results.map(page => {

        return {
            id: page.id,
            title: page.properties.Name.title[0].text.content,
            date: page.properties.Date.date.start,
            description: page.properties.Description.rich_text[0].text.content,
            tags: page.properties.Tags.multi_select.map(tag => tag.name)
        }
    })

    return blogs;
}
