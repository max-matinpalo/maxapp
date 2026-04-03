import "./global.css";
import "./globals";



// Mainstream js developers think globals are horrible
// But because we are C developers - We love them 😅

import { useState, useEffect, useRef, useLayoutEffect } from "react";
globalThis.useState = useState;
globalThis.useEffect = useEffect;
globalThis.useRef = useRef;
globalThis.useLayoutEffect = useLayoutEffect;

globalThis.ENV = import.meta.env;
globalThis.STATE = {};
globalThis.JOIN_CLASSES = (...classes) => classes.filter(Boolean).join(" ");


if ("serviceWorker" in navigator)
	window.addEventListener("load", () =>
		navigator.serviceWorker.register("/serviceWorker.js"));


import App from '../App.jsx';
import { createRoot } from "react-dom/client";
createRoot(document.getElementById("root")).render(<App />); 
