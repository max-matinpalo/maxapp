

export function ReloadBadge() {

	if (!import.meta.env.DEV) return null;

	const outer = {
		bottom: "0px",
		left: "0px",
		width: "64px",
		height: "64px",
		display: "flex",
		alignItems: "flex-end",
		justifyContent: "flex-start",
		padding: "8px",
		cursor: "pointer",
		zIndex: 10000,
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
		opacity: 1
	};

	return (
		<div style={{ position: "fixed", ...outer }} onClick={() => location.reload()} title="Reload page">
			<div style={inner}>R</div>
		</div>
	);
}