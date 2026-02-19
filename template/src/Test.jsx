import styles from "./Test.module.css";

export default function Test({ title }) {

	return (
		<div className={styles.cnt}>

			<h1>{title || "test"}</h1>


		</div>);
}
