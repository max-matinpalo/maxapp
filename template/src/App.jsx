import styles from "./App.module.css";


import logo from "@/_assets/react.svg";

export default function App() {

	// Comment this line in for testing if lint overlay works
	// If not clear browser history at least mostly solves it
	// if (1) 2;

	let some = Test;

	//if (isPwa() && isIphone())
	// style.height = "100vh";

	return (
		<div className={styles.app} >
			<img src={logo}></img>
			<Test title="Yes we can" />
			<h1 className={styles.title}>😃 maxapp 😃</h1>
		</div>

	);
};