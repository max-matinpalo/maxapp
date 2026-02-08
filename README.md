# maxapp
A clean starting point for a **Vite + React + TypeScript** **PWA** that can be installed on **iOS** and **Android**.

Making a web app installable as a PWA (and looking/feeling like a native fullscreen app) is not “just one checkbox”.
The goal of this template is to provide the **minimal required config + markup + styles** so your app:

- can be installed on **Android** (“Install app”)
- can be installed on **iOS** (“Add to Home Screen”)
- launches with an **app-like fullscreen** experience


## 📦 Usage

```bash
npx maxapp <app-name>
cd <app-name>
npm run dev
```



## What this template sets up

Installable PWAs typically require a few concrete pieces working together:

- `public/manifest.json`
- a **service worker** (required for Android installability)
- a few **HTML meta tags / headers**
- a few **base styles** for app-like layout (fullscreen behavior)



## 👨‍💻 Improved development experience

Vite has the right attitude: fast and minimal.

Vite’s built-in overlay focuses on **runtime errors**. For linting and type errors you often get just a **white screen** and then have to check the **browser console** or the **terminal running the dev server** to understand what went wrong.

This template adds **one** dev dependency:

- `vite-plugin-lint-overlay` (shows **ESLint** + **TypeScript** problems in an in-browser overlay during development)

So you see the important errors directly in the browser, without bouncing between multiple places.