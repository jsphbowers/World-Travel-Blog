import { api } from "./AxiosService.js"
import { AppState } from "../AppState.js"
import { Blog } from "../models/Blog.js"
import { logger } from "../utils/Logger.js"

class BlogsService {
  async getAllBlogs() {
    const res = await api.get('/api/blogs')
    AppState.blogs = res.data.map(b => new Blog(b))
    logger.log(AppState.blogs)
  }

  async createBlog(blogData) {
    const res = await api.post('/api/blogs', blogData)
    const newBlog = new Blog(res.data)
    AppState.blogs.push(newBlog)
    return blog
  }

  async editBlog(blogData) {
    const res = await api.put('api/blogs/' + blogData.id, blogData)
    AppState.blog = new Blog(res.data)
  }

  setActive(blogId) {
    const blog = AppState.blogs.find(b => b.id == blogId)
    AppState.activeBlog = blog
    logger.log(AppState.activeBlog, "[THIS IS THE ACTIVE BLOG]")
  }

  async getBlogsByProfileId(query) {
    const res = await api.get('api/blogs', { params: query })
    AppState.blogs = res.data.map(b => new Blog(b))
  }

}

export const blogsService = new BlogsService()