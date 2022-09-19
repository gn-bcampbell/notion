const getBlogs = require('./services/notion')


// setup express
const express = require('express')
const PORT = process.env.PORT || 5000
const app = express()

app.listen(PORT, console.log(`server started on port ${PORT}`))

// setup middleware (links to folder -> public)
app.use(express.static('public'))

// setup route
app.get('/blogs', async (req, res) => {
    const blogs = await getBlogs();
    res.json(blogs);
})