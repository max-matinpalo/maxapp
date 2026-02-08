import styles from "./App.module.css";


export default function App() {

	// Comment this line in for testing if lint overlay works
	// If not clear browser history at least mostly solves it
	// if (1) 2;


	//if (isPwa() && isIphone())
	// style.height = "100vh";

	return (
		<div className={styles.app} >
			<h1>vite-template-max</h1>
		</div>

	);
};