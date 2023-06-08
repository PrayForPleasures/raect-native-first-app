import { useState } from "react";
import { Text, ScrollView, SafeAreaView, StatusBar } from "react-native";
import { Styles } from "../styles/styles";
import Header from "../components/Header";
import Content from "../components/Content";

const Home = () => {
	return (
		<>
			<SafeAreaView style={Styles.viewLine}></SafeAreaView>
			<Header></Header>
			<SafeAreaView style={Styles.viewLine}></SafeAreaView>
			<Content></Content>
			<SafeAreaView style={Styles.viewLine}></SafeAreaView>
			<StatusBar theme="auto" />
		</>
	);
};

export default Home;
