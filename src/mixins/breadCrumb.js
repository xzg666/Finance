export default {
    data() {
        return {
          breadList: [],
        };
      },
      methods: {
        getBreadList() {
          return this.$route.meta.bread
            ? (this.breadList = this.$route.meta.bread)
            : "";
        },
      },
      mounted() {
        this.getBreadList();
      },
}