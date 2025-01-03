const { createApp, ref } = Vue;
const { createRouter, createWebHashHistory } = VueRouter;

const count = ref(0);
const Home = {
  template: "#home",
  setup() {
    return { count }
  }
}

const app = createApp();

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Home,
      meta: {
        title: "Home"
      }
    }
  ]
});

router.afterEach((to) => {
  window.document.title = to.meta.title;
});

app.use(router);
app.mount("#app");
