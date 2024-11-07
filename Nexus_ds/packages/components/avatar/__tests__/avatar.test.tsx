import * as React from "react";
import {render, act} from "@testing-library/react";
import {mocks} from "@nexus-ds/test-utils";

import {Avatar} from "../src";

describe("Avatar", () => {
  it("should render correctly", () => {
    const wrapper = render(<Avatar />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Avatar ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  it("should populate imgRef", () => {
    const imgRef = React.createRef<HTMLImageElement>();
    const wrapper = render(
      <Avatar imgRef={imgRef} src="https://i.pravatar.cc/300?u=a042581f4e29026705d" />,
    );

    expect(imgRef.current).not.toBeNull();
    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("should render initials", () => {
    const {container} = render(<Avatar name="DeltaS" />);

    expect(container.querySelector("span")).toHaveTextContent("Jun");
  });

  it('should work with custom "getInitials" function', () => {
    const {container} = render(<Avatar getInitials={(name) => name.charAt(0)} name="DeltaS" />);

    expect(container.querySelector("span")).toHaveTextContent("J");
  });

  it('should be focusable if "isFocusable" is true', () => {
    const {container} = render(<Avatar isFocusable name="DeltaS" />);
    const avatar = container.querySelector("span");

    expect(avatar).toHaveAttribute("tabIndex", "0");
  });
});

describe("Avatar - fallback + loading strategy", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    mocks.image().restore();
  });

  test("should render an image", async () => {
    const mock = mocks.image();

    mock.simulate("loaded");
    const wrapper = render(
      <Avatar name="DeltaS" src="https://avatars.githubusercontent.com/u/87353374" />,
    );

    act(() => {
      jest.runAllTimers();
    });

    const img = wrapper.getByAltText("DeltaS");

    expect(img).toBeInTheDocument();
  });

  test("should fire onError if image fails to load", async () => {
    const mock = mocks.image();

    mock.simulate("error");

    const src = "https://avatars.githubusercontent.com/u/87353374";
    const name = "DeltaS";
    const onErrorFn = jest.fn();

    render(<Avatar name={name} src={src} onError={onErrorFn} />);

    act(() => {
      jest.runAllTimers();
    });

    expect(onErrorFn).toHaveBeenCalledTimes(1);
  });

  test("should render a name avatar if no src", () => {
    const {container} = render(<Avatar name="DeltaS" />);

    expect(container.querySelector("span")).toHaveTextContent("Jun");
  });

  test("should render a default avatar if no name or src", () => {
    const {container} = render(<Avatar />);

    expect(container.querySelector("svg")).toBeInTheDocument();
  });
});
