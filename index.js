const { createApp, ref } = Vue

createApp({
  setup() {
    const isOpenMenu = ref(false)
    const message = ref("Hello vue!")

    const toggleMenu = () => {
      isOpenMenu.value = !isOpenMenu.value
    }
    return {
      message,
      isOpenMenu,

      toggleMenu,
    }
  },
}).mount("#app")
