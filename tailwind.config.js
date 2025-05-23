/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F7F9FC",
        header: "#111827",
        sidebar: "#1E1E2F",
        sidebarHover: "#4F46E5",
        primary: "#3B82F6",
        primaryDark: "#2563EB",
        textMain: "#1F2937",
        textSecondary: "#6B7280",
        iconDefault: "#94A3B8",
        iconHover: "#E2E8F0",
        logoPrimary: "#3B82F6",
        logoAccent: "#38BDF8"
      },
      fontFamily: {
        sans: ['segue-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}

