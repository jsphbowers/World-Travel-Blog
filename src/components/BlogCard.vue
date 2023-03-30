<template>
  <div>
    <div class="card p-3 m-2 elevation-3 border-dark">
      <div>
        <div class="d-flex align-items-center">
          <img class="profile-icon border-dark elevation-2 my-2" :src="blog.creator.picture" :alt="blog.title">
          <h4 class="mx-3"> {{ blog.creator.name }}</h4>
        </div>
        <h3 class="my-2">{{ blog.title }}</h3>
        <div class="d-flex justify-content-between">
          <div>
            <p>{{ blog.body }}</p>
            <h6>{{ blog.createdAt }}</h6>
          </div>
          <router-link :to="{ name: 'ActiveBlogPage', params: { blogId: blog.id } }">
            <img @click="setActive(blog.id)" class="blog-img selectable" :src="blog.imgUrl" :alt="blog.name">
          </router-link>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
import { Blog } from "../models/Blog.js";
import { logger } from "../utils/Logger.js";

export default {
  props: {
    blog: {
      type: Blog,
      required: true
    }
  },
  setup() {
    return {
      setActive(blogId) {
        logger.log(blogId)
      }
    };
  },
}
</script>


<style lang="scss" scoped>
.profile-icon {
  height: 60px;
  width: 60px;
  border-radius: 50%;
}

.blog-img {
  height: 230px;
  width: 300px;
  border-radius: 2em;
}
</style>