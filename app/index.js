import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Styles } from "../styles/styles";

const Home = () => {
	const router = useRouter();

	return (
		<SafeAreaView style={Styles.header}>
			<Text style={Styles.header__text}>Непутёвые заметки</Text>
		</SafeAreaView>
	);
};

export default Home;
