

export default function ReloadBadge() {

	if (!import.meta.env.DEV) return null;

	/** @type {import('react').CSSProperties} */
	const outer = {
		position: "fixed",
		bottom: "0px",
		left: "0px",
		width: "64px",
		height: "64px",
		display: "flex",
		alignItems: "flex-end",
		justifyContent: "flex-start",
		padding: "8px",
		cursor: "pointer",
		zIndex: 2147483647,
		//userSelect: "none"
	};

	const inner = {
		width: "24px",
		height: "24px",
		background: "#00000099",
		color: "#ffffff",
		borderRadius: "50%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		fontSize: "12px",
		backdropFilter: "blur(2px)",
		opacity: 0
	};

	return (
		<div style={outer} onClick={() => location.reload()} title="Reload page">
			<div style={inner}>-</div>
		</div>
	);
}