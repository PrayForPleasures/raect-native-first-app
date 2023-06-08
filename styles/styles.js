import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
	viewLine: {
		height: 2,
		width: "100%",
		backgroundColor: "#444444",
	},
	header: {
		height: 48,
		backgroundColor: "#7d7fff",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
	},
	headerText: {
		color: "whitesmoke",
		fontSize: "20px",
		fontWeight: "bold",
		textTransform: "uppercase",
	},
	headerButton: {
		color: "whitesmoke",
		fontSize: "20px",
	},
	mainContent: {
		width: "100%",
		height: 400,
		display: "flex",
		backgroundColor: "#b5b6ff",
		display: "flex",
	},
	buttonContent: {
		color: "black",
		backgroundColor: "whitesmoke",
		padding: 4,
		borderWidth: 2,
		borderColor: "#444444",
		borderRadius: "3px",
		backgroundColor: "#7d7fff",
	},
	textContentLines: {
		width: "76%",
		backgroundColor: "#7d7fff",
		color: "whitesmoke",
		padding: 8,
	},
	flexContentLines: {
		display: "flex",
		flexDirection: "row",
		backgroundColor: "#7d7fff",
	},
	buttonsFlex: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
		padding: 4,
	},
	buttonTextLeft: {
		fontSize: 16,
		fontWeight: "bold",
		color: "whitesmoke",
		padding: 4,
		backgroundColor: "#7d7fff",
		textAlign: "center",
	},
	buttonTextRight: {
		fontSize: 16,
		fontWeight: "bold",
		color: "whitesmoke",
		padding: 4,
		backgroundColor: "#7d7fff",
		textAlign: "center",
	},
	inputForm: {
		height: 48,
		padding: 4,
		fontSize: 16,
		color: "#444444",
		fontWeight: "bold",
	},
	deleteButton: {
		width: "24%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#7d7fff",
		borderRadius: "50%",
	},
	deleteButtonText: {
		fontSize: 24,
		fontWeight: "bold",
		color: "whitesmoke",
	},
	buttonsAdds: {
		width: "50%",
	},
});
