/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  
  
    theme: {
      extend: {
        /* Farvepalette */
        colors: {
          transparent: "transparent",
          current: "currentColor",
          beige: {
            100: "#FEFBFB", 
            200: "#FCF8F7",
            300: "#FBF4F4",
            400: "#FAF1F0",
            500: "#F9EFEE", //beige baggrundsfarve
            600: "#DFA9A5", 
            700: "#C6665D",
            800: "#8F3A33",
            900: "#481D19",
          },
          rosa: {
            50: "#FFF", 
            200: "#FFFBFA",
            500: "#FFF9F8", // rosa sektionsfarve
            600: "#FFA494",
            700: "#FF4D2E",
            800: "#C71E00",
            900: "#660F00",
          },
          greyblue: {
            50: "#F0F2F4", 
            100: "#E1E5EA", 
            200: "#C4CAD4",
            300: "#A6B0BF",
            400: "#8B98AC",
            500: "#F9EFEE", // gråblå til mikrokonvertering (sekundære knapper)
            600: "#58657A", 
            700: "#404A59",
            800: "#2B313B",
            900: "#15191E",
          },
          blue: {
            50: "#D6D9FF", 
            100: "#A8AEFF", 
            200: "#525DFF",
            300: "#0011FA",
            400: "#000BA3",
            500: "#00054E", // blå til overskrifter 
            600: "#00043D", 
            700: "#00032E",
            800: "#00021F",
            900: "#00010F",
          },
          darkgreyblue: {
            500: "#505379", // mørk gråblå til brødtekst
          },
          denimblue: {
            500: "#2B3D5A", // denimblå til makrokonvertering (primære knapper)
          }
        },     
  
        /* Spacing */
        // spacing: {
        //   "spacing-none": "0",
        //   xs: "15px",
        //   s: "20px",
        //   sm: "30px",
        //   m: "42px",
        //   ml: "49px",
        //   lg: "60px",
        //   xl: "75px",
        //   "1xl": "88px",
        //   "2xl": "96px",
        //   "3xl": "107px",
        //   "4xl": "120px",
        //   "5xl": "132px",
        //   "6xl": "148px",
        //   "7xl": "152px",
        //   "8xl": "162px",
        // },
  
        /* Fonte */
        // fontFamily: {
        //   onestBlack: ["Onest-Black", "sans-serif"],
        //   onestRegular: ["Onest-Regular", "sans-serif"],
        //   albert: ["Albert Sans", "sans-serif"],
        //   londrina: ["Londrina Solid", "sans-serif"],
        // },
  
        /* Typografisk hierarki */
        // fontSize: {
        //   xs: "13px",
        //   sm: "15px",
        //   base: "18px",
        //   lg: "20px",
        //   xl: "24px",
        //   "2xl": "32px",
        //   "3xl": "36px",
        //   "4xl": "40px",
        //   "5xl": "44px",
        //   "6xl": "45px",
        //   "7xl": "52px",
        //   "8xl": "64px",
        //   "9xl": "90px",
        // },
  
        /* Fontvægt */
        // fontWeight: {
        //   regular: "400",
        //   medium: "500",
        //   semibold: "600",
        //   bold: "700",
        //   extrabold: "800",
        //   black: "900",
        // },
  
        /* Border størrelser */
        // borderWidth: {
        //   DEFAULT: "1px",
        //   0: "0px",
        //   2: "2px",
        //   3: "3px",
        //   sm: "4px",
        //   md: "8px",
        //   lg: "16px",
        //   xl: "32px",
        //   "2xl": "128px",
        //   "3xl": "360px",
        // },
  
        /* Border radius størrelser */
        // borderRadius: {
        //   DEFAULT: "1.25rem",
        //   none: "0px",
        //   20: "20px",
        //   30: "30px",
        //   50: "50px",
        //   100: "100px",
        // },
      },
    },
    plugins: [
      require("@tailwindcss/typography"),
      require("@tailwindcss/forms"),
      require("@tailwindcss/aspect-ratio"),
      require("@tailwindcss/container-queries"),
    ],
  };
  