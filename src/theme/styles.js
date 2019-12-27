import palette from "./palette";

export default {
  gradient: {
    widgetEmbossed: "linear-gradient(135deg, #424869 24.41%, #4a5178 81.64%)",
    widget: x =>
      `radial-gradient(100% 197.75% at ${x}% 0%, #4D557A 5.73%, #2D324D 82.53%)`,
    widget2: (a, bg) => `linear-gradient(${a}deg, #494F74 0%, ${bg} 100%)`
  },
  boxShadow: {
    background:
      "-32px -32px 48px rgba(76, 83, 118, 0.17), inset 2px 2px 2px rgba(83, 92, 136, 0.11), inset -1px -1px 4px rgba(44, 48, 68, 0.2)",
    widgetBS: "inset 2px 2px 2px rgba(83, 92, 136, 0.11)",
    widgetEmbossed:
      "inset -2px -2px 4px rgba(83, 92, 136, 0.16), inset 2px 2px 4px rgba(38, 49, 105, 0.16)",

    widgetDS:
      "drop-shadow(12px 12px 32px #2E334E) drop-shadow(-12px -12px 20px rgba(73, 80, 115, 0.72))",

    widget2:
      "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A"
  },
  borderRadius: {
    widget: "13px",
    widget2: "13px"
  }
};
