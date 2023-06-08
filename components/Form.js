import React, { useState } from "react";
import { Styles } from "../styles/styles";
import {
	Text,
	TextInput,
	View,
	TouchableOpacity,
	SafeAreaView,
} from "react-native";

const Form = ({ addHandler }) => {
	const [txt, setTxt] = useState("");
	const handleChange = (txt) => {
		setTxt(txt);
	};
	return (
		<View>
			<TextInput
				style={Styles.inputForm}
				onChangeText={handleChange}
				placeholder="Ваша Заметочка"
				placeholderTextColor={"#444444"}
				autoFocus={true}
			></TextInput>
			<SafeAreaView style={Styles.viewLine}></SafeAreaView>
			<SafeAreaView style={Styles.buttonsFlex}>
				<TouchableOpacity
					style={Styles.buttonsAdds}
					onPress={() => {
						addHandler(txt);
					}}
				>
					<Text style={Styles.buttonTextLeft}>+ Добавить</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={Styles.buttonsAdds}
					onPress={() => {
						console.log("paint");
					}}
				>
					<Text style={Styles.buttonTextRight}>&#9998; Нарисовать</Text>
				</TouchableOpacity>
			</SafeAreaView>
		</View>
	);
};

export default Form;
