import create from "zustand";

const [useStore, api] = create((set) => ({
  anchors: {},
  top: 0,
  height: 0,
  contentHeight: 0,
  set,
}));

export { useStore, api };
