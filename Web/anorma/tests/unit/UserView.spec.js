/* eslint-disable no-undef */
import { mount } from "@vue/test-utils";
import UserView from "@/components/UserView.vue";

describe("UserView.vue", () => {
  it("renders a msg", () => {
    const wrapper = mount(UserView);
    console.log(wrapper.html());
  });
});
