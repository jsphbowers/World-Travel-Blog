<template>
  <div class="section-fluid">
    <section class="row justify-content-center">
      <div class="col-11 p-2 my-2 card border-rounded border-dark">
        <div class="text-center">
          <img class="blog-photo" :src="blog.imgUrl" :alt="blog.title">
        </div>
        <div class="d-flex selectable">
          <img class="profile-icon mx-3" :src="blog?.creator?.picture" :alt="blog?.creator?.name">
          <div class="mx-3">
            <h2>{{ blog.title }}</h2>
            <h4>By: {{ blog.creator.name }}</h4>
            <h5>Last Updated: {{ blog.createdAt }}</h5>
          </div>
        </div>
        <div>
          <p class="p-2">
            {{ blog.body }}
          </p>
        </div>

      </div>
    </section>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState.js";

export default {
  setup() {
    return {
      blog: computed(() => AppState.activeBlog)
    }
  }
}
</script>


<style lang="scss" scoped>
.profile-icon {
  height: 100px;
  width: 100px;
  border-radius: 50%;
}

.blog-photo {
  height: auto;
  width: 100vh;
  border-radius: 1em;
  border: 2px solid #FFC017;
}
</style>