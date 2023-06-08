import {
	Text,
	SafeAreaView,
	TouchableOpacity,
	View,
	FlatList,
} from "react-native";
import { Styles } from "../styles/styles";
import Form from "./Form";
import { useState } from "react";

const Content = () => {
	const [deal, setDeal] = useState([]);

	const addHandler = (text) => {
		setDeal((deals) => {
			return [
				...deals,
				{ text: text, key: Math.random().toString(36).substring(7) },
			];
		});
	};

	const deleteHandler = (key) => {
		setDeal((prevState) => {
			return prevState.filter((deal) => deal.key != key);
		});
	};

	return (
		<>
			<SafeAreaView style={Styles.mainContent}>
				<Form addHandler={addHandler} />
				<View>
					<SafeAreaView style={Styles.viewLine}></SafeAreaView>
					<View>
						<FlatList
							data={deal}
							renderItem={({ item }) => (
								<TouchableOpacity>
									<View style={Styles.flexContentLines}>
										<Text style={Styles.textContentLines}>{item.text}</Text>
										<TouchableOpacity
											style={Styles.deleteButton}
											onPress={deleteHandler}
										>
											<Text style={Styles.deleteButtonText}>&#10008;</Text>
										</TouchableOpacity>
									</View>
									<SafeAreaView style={Styles.viewLine}></SafeAreaView>
								</TouchableOpacity>
							)}
						/>
					</View>
				</View>
			</SafeAreaView>
		</>
	);
};
//
//
export default Content;
