import { d as defineComponent } from "./main.js";
const home_vue = defineComponent({
  // type inference enabled
  props: {
    name: String,
    msg: { type: String, required: true }
  },
  data() {
    return {
      count: 1
    };
  },
  mounted() {
    this.name;
    this.msg;
    this.count;
  }
});
export {
  home_vue as default
};
