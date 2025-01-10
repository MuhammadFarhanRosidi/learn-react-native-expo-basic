import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function DetailScreen({ navigation, route }) {
  // console.log(route.params.item);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.header}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              fontStyle: "italic",
              fontVariant: ["small-caps"],
              color: "white",
            }}
          >
            Detail Screen
          </Text>
        </View>
        <View style={styles.container}>
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: "blue",
              borderRadius: 20,
              width: 200,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => navigation.goBack()}
          >
            <Text style={{ color: "white" }}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.text}>Detail Screen</Text>
          <Text style={styles.text}>{route.params.item}</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "blue",
    padding: 15,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
