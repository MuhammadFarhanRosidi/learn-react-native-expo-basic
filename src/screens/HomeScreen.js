import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({ navigation }) {
  // const navigation = useNavigation();
  const DATA = [
    {
      id: "1",
      title: "First Item",
    },
    {
      id: "2",
      title: "Second Item",
    },
    {
      id: "3",
      title: "Third Item",
    },
    {
      id: "4",
      title: "Fourth Item",
    },
    {
      id: "5",
      title: "Fifth Item",
    },
    {
      id: "6",
      title: "Six Item",
    },
    {
      id: "7",
      title: "Seven Item",
    },
    {
      id: "8",
      title: "Eight Item",
    },
    {
      id: "9",
      title: "Nine Item",
    },
  ];
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
              color: "#fff",
              textAlign: "center",
            }}
          >
            Marhaban bikum
          </Text>
        </View>
        {/* <ScrollView>
        {[...new Array(10)].map((item) => (
          <View
          key={item}
          style={{
            padding: 20,
            backgroundColor: "red",
            margin: 20,
            borderRadius: 10,
            flexDirection: "row",
            gap: 10,
            }}
            >
            <Image
            // width={100}
            // height={100}
            style={{ width: 100, height: 100, borderRadius: 50 }}
            source={{
              uri: "https://image.web.id/images/img-testimonial-2.png",
              }}
              />
              <View>
              <Text style={{ color: "white" }}>Muhammad Farhan Rosidi</Text>
              <Text style={{ color: "white" }}>Usia: 23</Text>
              <Text style={{ color: "white" }}>Alumni UINSA</Text>
              </View>
              </View>
              ))}
              </ScrollView> */}
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("DetailScreen", { item: item.id })
              }
              style={{
                padding: 20,
                backgroundColor: "red",
                margin: 20,
                borderRadius: 10,
                flexDirection: "row",
                gap: 10,
              }}
            >
              <Image
                style={{ width: 100, height: 100, borderRadius: 50 }}
                source={{
                  uri: "https://image.web.id/images/img-testimonial-2.png",
                }}
              />
              <View>
                <Text style={{ color: "white" }}>{item.id}</Text>
                <Text style={{ color: "white" }}>{item.title}</Text>
                <Text style={{ color: "white" }}>Usia: 23</Text>
                <Text style={{ color: "white" }}>Alumni UINSA</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
        <StatusBar style="light" backgroundColor="#282a36" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: "#ffffff",
  //   // padding: 20,
  //   // marginTop: 20,
  //   flex: 1,
  //   paddingTop: 40,
  // },
  header: {
    backgroundColor: "#282a36",
    padding: 20,
  },
});
