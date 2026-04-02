import styles from "./App.module.css";
export default function App() {

	console.log(ENV);

	return (
		<div className={styles.app} >
			<h1 className={styles.title}>maxapp </h1>
			<ReloadBadge />
		</div>
	);
};