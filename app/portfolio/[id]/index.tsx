import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function PortfolioDetails() {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Viewing Portfolio {id}</Text>
    </View>
  );
}
