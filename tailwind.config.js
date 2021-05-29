module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  // specify other options here

  theme: {
    extend: {
      fontSize: {
        "3xs": ".5rem",
        xxs: ".65rem",
      },
      fontFamily: {
        pixelated: ['"Press Start 2P"', "cursive"],
        mono: ["'Courier Prime'", "monospace"],
        play: ["Iceland", "monospace"],
      },
      colors: {
        superiority: "var(--superiority)",
        corn: "var(--corn)",
        grey: "var(--grey)",
        green: "var(--green)",
        mandarin: "var(--mandarin)",
        violet: "var(--violet)",
      },
      boxShadow: {
        superiority: "4px 5px var(--superiority)",
        mandarin: "4px 5px var(--mandarin)",
      },
    },
  },
};
