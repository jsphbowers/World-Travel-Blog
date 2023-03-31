<template>
  <div class="container-fluid">
    <section class="row m-4">
      <div class="col-2"><img class="profile-style" :src="profile?.picture" :alt="profile?.name"></div>
      <div class="col-10">
        <h1 class="ps-4">{{ profile?.name }}</h1>
      </div>
      <div v-if="account.id == profile?.id" class="col-12 my-4"><button data-bs-toggle="modal" data-bs-target="#blogModal"
          class="btn btn-outline-success">Add
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
import { computed, onMounted } from "vue";
import BlogModal from "../components/BlogModal.vue";
import { useRoute } from 'vue-router';
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { profilesService } from "../services/ProfilesService.js";
import { blogsService } from "../services/BlogsService.js";


export default {
  setup() {
    const route = useRoute()

    async function getProfileById() {
      try {
        const profileId = route.params.profileId
        await profilesService.getProfileById(profileId)
      } catch (error) {
        logger.error(error.message)
        Pop.error(error.message)
      }
    }

    async function getBlogsByProfileId() {
      try {
        const profileId = route.params.profileId
        await blogsService.getBlogsByProfileId({ creatorId: profileId })
      } catch (error) {
        logger.error(error.message)
        Pop.error(error.message)
      }
    }

    onMounted(() => {
      getProfileById()
      getBlogsByProfileId()
    })
    return {
      route,
      profile: computed(() => AppState.activeProfile),
      blogs: computed(() => AppState.blogs),
      account: computed(() => AppState.account)
    }
  },
  components: { BlogCard, BlogModal }
}
</script>


<style lang="scss" scoped>
.profile-style {
  height: 20vh;
  width: 20vh;
  border-radius: 50%;
}
</style>