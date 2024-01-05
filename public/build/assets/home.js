import { d as defineComponent, r as ref, t as toDisplayString } from "./main.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "home",
  setup(__props) {
    const count = ref(1);
    return (_ctx, _cache) => {
      return toDisplayString(count.value.toFixed(2));
    };
  }
});
export {
  _sfc_main as default
};
