/** @type {import('tailwindcss').Config} */
export default {
  // dark: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    'node_modules/preline/dist/*.js',

  ],
  theme: {
    extend: {
      colors: {
        primary: '#164C7B',
        secondary: '#3EC55E',
        lightDark: '#374151',
        warning: '#eb9822',
        success: '#57b157',
        danger: '#d54b47',
        update: '#ffb300',
        comment: '#919191',
        hoverColor: '#164C89',
        lightprimary: '#e0def7',
        bgnav: '#ffffff',
        bgcolor: '#f0f4fa',
        bgsidebar: '#ffffff',

        bgdropdown: '#ebf0f4',
        darkone: '#282F53',
        bginput: '#fff',
        bordercolor: '#e5e7eb',

        dark: {
          primary: '#3EC55E',
          secondary: '#164C7B',
          hoverColor: '#1a1a3c',
          bgnav: '#2b2a4a',
          bgcolor: '#1a1a3c',
          bgsidebar: '#2b2a4a',
          lightprimary: '#414163',

          bgdropdown: '#213C4D',
          darkone: '#dedefd',
          secondary: '#e7e3e3',
          bginput: '#282848',
          bordercolor: '#374151'
        },
        btn: {
          primary: '#64bcf4',
          warning: '#eb9822',
          success: '#57b157',
          danger: '#d54b47',
          update: '#ffb300'
        }
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('preline/plugin'),
    require('@tailwindcss/typography'),

  ],
  darkMode: "class"

}






