<template>
  <div class="modal fade" id="blogModal" tabindex="-1" aria-labelledby="blogModal" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">

        <div class="modal-header">
          <h1 class="modal-title fs-5" id="blogModalLabel">Add new blog</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <form @submit.prevent="createBlog()">
          <div class="modal-body row">
            <div class="col-12">
              <label for="title">Blog Title</label>
              <input required type="text" id="title" name="title" v-model="editable.title" class="form-control"
                maxlength="50">
            </div>
            <div class="col-12">
              <label for="imgUrl">Blog Image</label>
              <input required type="url" id="imgUrl" name="imgUrl" v-model="editable.imgUrl" class="form-control">
            </div>
            <div class="col-12">
              <label for="tags">tags (not required)</label>
              <input type="text" id="tags" name="tags" v-model="editable.tags" class="form-control" maxlength="50">
            </div>
            <div class="col-12">
              <label for="body">Add blog details</label>
              <textarea rows="5" cols="50" required id="body" name="body" v-model="editable.body" class="form-control"
                maxlength="1000">
                                </textarea>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-success" data-bs-dismiss="modal"> Create Blog
            </button>
          </div>
        </form>

      </div>
    </div>
  </div>
</template>


<script>
import { AppState } from "../AppState.js";
import { Blog } from "../models/Blog.js";
import { useRouter } from 'vue-router';
import { router } from "../router.js";
import { blogsService } from "../services/BlogsService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { ref } from "vue";


export default {
  // props: {
  //   blog: {
  //     type: Blog,
  //     required: true,
  //     default: {}
  //   }
  // },
  //NOTE do not need props unless editing
  setup() {
    const editable = ref({})
    const router = useRouter()

    return {
      editable,
      async createBlog() {
        try {
          const blogData = editable.value
          await blogsService.createBlog(blogData)
        } catch (error) {
          logger.log(error.message)
          Pop.error(error.message)
        }
      },
      // async editBlog() {
      //   try {
      //     const blogData = editable.value
      //     await blogsService.editBlog(blogData)
      //   } catch (error) {
      //     logger.log(error.message)
      //     Pop.error(error.message)
      //   }
      // },
      // handleSubmit() {
      //   if (props.blog.id) {
      //     this.editBlog()
      //   } else {
      //     this.createBlog()
      //   }
      // }
    }
  }
}
</script>


<style lang="scss" scoped></style>