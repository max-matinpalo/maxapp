import "maxapp/reset.css";
import "maxapp/app.css";
import "./global.css";


// Setup react globals
import { useState, useEffect, useRef, useLayoutEffect } from "preact/hooks";
globalThis.useState = useState;
globalThis.useEffect = useEffect;
globalThis.useRef = useRef;
globalThis.useLayoutEffect = useLayoutEffect;

// Setup other globals
globalThis.STATE = {};
globalThis.ENV = import.meta.env;
globalThis.JOIN_CLASSES = (...classes) => classes.filter(Boolean).join(" ");


// Setup maxfetch
import { setupApi } from "maxfetch";
globalThis.api = setupApi({ baseUrl: import.meta.env.VITE_API_URL });

api.onRequest(config => {
	if (localStorage.accessToken)
		config.headers["Authorization"] = `Bearer ${localStorage.accessToken}`;
});


// Enable useRefresh
import "use-refresh/global";

// Clear console on refresh
if (import.meta.hot)
	import.meta.hot.on("vite:beforeUpdate", () => console.clear());

// To enable insall as pwa
if ("serviceWorker" in navigator)
	window.addEventListener("load", () =>
		navigator.serviceWorker.register("/serviceWorker.js"));


import { render } from "preact";
render(<App />, document.getElementById("app"));