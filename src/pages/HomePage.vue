<template>
  <div class="container-fluid">
    <section class="row justify-content-center">
      <div class="col-11" v-for="b in blogs" :key="b.id">
        <BlogCard :blog="b" />
      </div>
    </section>
  </div>
</template>

<script>
import { onMounted } from "vue"
import { logger } from "../utils/Logger.js"
import Pop from "../utils/Pop.js"
import { blogsService } from "../services/BlogsService.js"
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState.js"
import BlogCard from "../components/BlogCard.vue"

export default {
  setup() {
    async function getAllBlogs() {
      try {
        await blogsService.getAllBlogs()
      } catch (error) {
        logger.error(error.message)
        Pop.error(error.message)
      }
    }

    onMounted(() => {
      getAllBlogs()
    })

    return {
      blogs: computed(() => AppState.blogs),
    }
  },
  components: { BlogCard }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
