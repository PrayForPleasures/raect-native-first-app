import { Text, SafeAreaView, TouchableOpacity } from "react-native";
import { Styles } from "../styles/styles";

const Header = () => {
	return (
		<>
			<SafeAreaView style={Styles.header}>
				<Text style={Styles.headerText}>Заметные Заметки </Text>
				<TouchableOpacity
					onPress={() => {
						console.log("refresh");
					}}
				>
					<Text style={Styles.headerButton}> &#8634;</Text>
				</TouchableOpacity>
			</SafeAreaView>
		</>
	);
};

export default Header;
