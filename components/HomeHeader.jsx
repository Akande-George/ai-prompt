import { View, Text, Image } from "react-native";
import React from "react";
const logo = require("../assets/images/logo-small.png");
const HomeHeader = () => {
  return (
    <View className="flex flex-row justify-between">
      <View className="">
        <Text className="text-white font-semibold text-md">Welcome Back</Text>
        <Text className="text-white font-bold text-2xl">Welcome Back</Text>
      </View>
      <Image
        source={logo}
        resizeMode="contain"
        className="w-[30.08px] h-[34.21px]"
      />
    </View>
  );
};

export default HomeHeader;
