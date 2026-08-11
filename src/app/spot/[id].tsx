import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function SpotDetailScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Detalle del Spot: {id}</Text>
    </View>
  );
}
