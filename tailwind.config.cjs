/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      manrope: ["Manrope", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        heroDesktop: "url('/assets/home/desktop/image-hero.jpg')",
        heroTablet: "url('/assets/home/tablet/image-header.jpg')",
        heroMobile: "url('/assets/home/mobile/image-header.jpg')",
        zx7ContainerLinear:
          "linear-gradient(0.25turn,  #DADADA, #DEDEDE, #DEDEDE, #DEDEDE , #DEDEDE), linear-gradient(to top, #c7c7c7, #cfcfcf, #dadada);",
      },
    },
  },
  plugins: [],
};

//
