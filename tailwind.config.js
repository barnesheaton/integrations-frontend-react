import flowbitePlugin from 'flowbite/plugin'

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  darkMode: 'class',
  theme: {
    colors: {
      secondary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"},
      primary: {
          '50': '#f3f1ff',
          '100': '#ebe5ff',
          '200': '#d9ceff',
          '300': '#bea6ff',
          '400': '#9f75ff',
          '500': '#843dff',
          '600': '#7916ff',
          '700': '#6b04fd',
          '800': '#5a03d5',
          '900': '#4b05ad',
          '950': '#2c0076',
      },
    },
    extend: {
      colors: {
        secondary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"},
        primary: {
            '50': '#f3f1ff',
            '100': '#ebe5ff',
            '200': '#d9ceff',
            '300': '#bea6ff',
            '400': '#9f75ff',
            '500': '#843dff',
            '600': '#7916ff',
            '700': '#6b04fd',
            '800': '#5a03d5',
            '900': '#4b05ad',
            '950': '#2c0076',
        },
      }

    },
  },
  plugins: [
    flowbitePlugin
  ]
}

