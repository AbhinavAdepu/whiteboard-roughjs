import React from "react";
import { mount } from "enzyme";
import Header from "../components/Header";

describe("DetailNews", () => {
  let mountedWrapper;
  const defaultProps = {
    itemDetail: {},
    openDetails: true,
    setOpenDetails: jest.fn(),
    showBlock: true
  };

  const wrapper = (props = defaultProps) => {
    if (!mountedWrapper) {
      mountedWrapper = mount(<Header {...props} />);
    }
    return mountedWrapper;
  };

  beforeEach(() => {
    mountedWrapper = undefined;
  });

  it("should open detail dialog", () => {
    const component = wrapper();
  });
});
