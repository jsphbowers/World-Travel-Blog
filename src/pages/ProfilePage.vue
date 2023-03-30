<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-3"><img :src="profile?.picture" :alt="profile?.name"></div>
      <div class="col-9">
        <h3>{{ profile?.name }}</h3>
      </div>
      <div class="col-12"><button data-bs-toggle="modal" data-bs-target="#blogModal" class="btn btn-outline-success">Add
          Blog<i class="mdi mdi-plus btn btn-outline"></i></button></div>
    </section>
    <section class="row justify-content-center">
      <div class="col-11" v-for="b in blogs" :key="b.id">
        <BlogCard :blog="b" />
      </div>
    </section>
  </div>
</template>


<script>
import BlogCard from "../components/BlogCard.vue"
import { AppState } from "../AppState.js";
import { computed } from "vue";
import BlogModal from "../components/BlogModal.vue";


export default {
  setup() {
    return {
      profile: computed(() => AppState.activeProfile),
      blogs: computed(() => AppState.blogs)
    }
  },
  components: { BlogCard, BlogModal }
}
</script>


<style lang="scss" scoped></style>