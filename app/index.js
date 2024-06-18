import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Link, Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import { useGlobalContext } from "../context/GlobalProvider";
const logo = require("../assets/images/logo.png");
const cards = require("../assets/images/cards.png");
const path = require("../assets/images/path.png");
const App = () => {
  const { isLoading, isLoggedIn } = useGlobalContext();
  if (!isLoading && isLoggedIn) return <Redirect href="/home" />;
  return (
    <SafeAreaView className="bg-primary h-full">
      <View style={{ height: "100%" }}>
        <ScrollView>
          <View className="w-full  px-4 flex justify-center items-center min-h-[85vh]">
            <Image
              source={logo}
              className="w-[115px] h-[34.07px]"
              resizeMode="contain"
            />
            <Image
              source={cards}
              className="max-w-[380px] w-full h-[298px]"
              resizeMode="contain"
            />
          </View>
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-2"
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm font-regular text-gray-100 mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </ScrollView>
      </View>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};
export default App;
