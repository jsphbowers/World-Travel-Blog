<template>
  <header class="blogger-colors text-dark">
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer class="blogger-colors text-dark">
    Made with 🫕 by Joseph Bowers and Alex Quan
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}

.blogger-colors {
  background-color: #FFC017;
}
</style>
