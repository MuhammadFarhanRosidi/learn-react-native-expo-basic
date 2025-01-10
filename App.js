import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import DetailScreen from "./src/screens/DetailScreen";
import { Button, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StoreScreen from "./src/screens/StoreScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
// screen, navigator
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "HomeScreen") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "StoreScreen") {
            iconName = focused ? "storefront" : "storefront-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name={"HomeScreen"}
        options={{ title: "Home" }}
        component={HomeScreen}
      />
      <Tab.Screen
        name={"StoreScreen"}
        options={{ title: "Store" }}
        component={StoreScreen}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator
        initialRouteName="HomeScreen"
        // screenOptions={{ headerShown: false }}
        screenOptions={{
          headerStyle: {
            backgroundColor: "blue",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          // options={{ title: "Dashboard" }}
          name="HomeScreen"
          component={HomeScreen}
          // options={{
          //   headerStyle: {
          //     backgroundColor: "#f4511e",
          //   },
          //   headerTintColor: "#fff",
          //   headerTitleStyle: {
          //     fontWeight: "bold",
          //   },
          // }}
          options={{
            headerRight: () => (
              <TouchableOpacity>
                <Text style={{ color: "#fff" }}>Info</Text>
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          // options={{
          //   headerStyle: {
          //     backgroundColor: "#f4511e",
          //   },
          //   headerTintColor: "#fff",
          //   headerTitleStyle: {
          //     fontWeight: "bold",
          //   },
          //   // headerBackTitle: "Back",
          //   // headerBackTitleStyle: { fontSize: 30 },
          // }}
          options={{
            headerBackTitle: "Custom Back",
            headerBackTitleStyle: { fontSize: 30 },
          }}
          name="DetailScreen"
          component={DetailScreen}
        />
      </Stack.Navigator> */}
      {/* Terpisah */}
      {/* <Tab.Navigator>
        <Tab.Screen name={"HomeScreen"} component={HomeScreen} />
        <Tab.Screen name={"StoreScreen"} component={StoreScreen} />
      </Tab.Navigator> */}

      {/* Nesting Navigator */}
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={"HomeTabs"} component={HomeTabs} />
        <Stack.Screen name={"DetailScreen"} component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
