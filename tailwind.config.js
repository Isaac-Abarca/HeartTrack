/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@shadcn/ui/**/*.js',  // Incluir shadcn/ui en el escaneo
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

