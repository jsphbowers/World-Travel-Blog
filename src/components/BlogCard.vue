<template>
  <div>
    <div class="card p-3 m-2 elevation-3 selectable border-dark">
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
          <img class="blog-img" :src="blog.imgUrl" :alt="blog.name">
        </div>
      </div>
    </div>

  </div>
</template>


<script>
import { Blog } from "../models/Blog.js";

export default {
  props: {
    blog: {
      type: Blog,
      required: true
    }
  },
  setup() {
    return {
    }
  }
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