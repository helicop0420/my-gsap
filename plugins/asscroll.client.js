import Vue from "vue";
import ASScroll from "@ashthornton/asscroll";

const install = (instance) => {
  instance.prototype.ASScroll = ASScroll;
};

Vue.use(install);
