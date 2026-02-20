import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import "./globals";
import App from '../App.jsx';


// Mainstream js developers think globals are horrible
// But because we are C developers - We love them 😅
import { useState, useEffect, useRef } from "react";
Object.assign(globalThis, { useState, useEffect, useRef });

globalThis.ENV = import.meta.env;

if ("serviceWorker" in navigator) {
	window.addEventListener("load", () => {
		navigator.serviceWorker.register("/serviceWorker.js");
	});
}

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>,
); 
