//front end js to fetch from api
const blogsElement = document.querySelector('#blogs')

const getBlogsFromBackend = async () => {
    const res = await fetch('http://localhost:5000/blogs')
    const data = await res.json()
    return data;
}

// add to DOM
const addBlogsToDom = async () => {
    const blogs = await getBlogsFromBackend()

    blogs.forEach(blog => {
        const div = document.createElement('div')
        div.innerHTML = `
        <h3>${blog.title}</h3>
        <ul>
            <li><strong>Release Date: </strong> ${blog.date}</li>
            <li><strong>Description: </strong> ${blog.description}</li>
        </ul>

        <div>
            ${blog.tags.join(", ")}
        </div>
        `
        blogsElement.appendChild(div)
    });
}

addBlogsToDom();