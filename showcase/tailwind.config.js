/** @type {import('tailwindcss').Config} */
/* https://colorhunt.co/palette/163020304d30b6c4b6eef0e5 */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: { 
      "white": "hsl(0, 0%, 100%)",
      "darkBlue": "#1c2023",
      "red": "#ec2c4c",
      "lightGray": "hsl(0, 0%, 81%)",
      "grayishBlue": "hsl(217, 19%, 35%)",
      "darkGreen": "#163020",
      "mediumGreen": "#304D30",
      "lightGreen": "#B6C4B6",
      "offWhite": "#EEF0E5",
      "HTML": "#F09F4E",
      "CSS": "#41AEC2", 
      "JavaScript": "#F9DC5C",
      "jQuery": "#0868AC",
      "EJS": "#b4ca65",
      "TypeScript": "#3178C6",
      "Python": "#FFD43B",
      "Node": "#026E00",
      "Express": "#040404",
      "Redux": "#764ABC",
      "API": "#040404",
      "JWT": "#040404",
      "Bootstrap": "#7d12f8",
      "SASS": "#CC649C",
      "Tailwind": "#3CBCFC",
      "React": "#64DCFC",
      "Next": "#040404",
      "Angular": "#c3002f",
      "Webpack": "#8dd6f9",
      "Django": "#092E20",
      "SQLite": "#044A64",
      "PostgreSQL": "#336791",
      "MongoDB": "#00684A",
      "Design": "#304D30",

    },
    extend: {
      fontFamily: {
        spaceGroteskRegular: "SpaceGrotesk-Regular",
        spaceGroteskMedium: "SpaceGrotesk-Medium",
        spaceGroteskBold: "SpaceGrotesk-Bold",
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
}