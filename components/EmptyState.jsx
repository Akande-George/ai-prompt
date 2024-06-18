import { View, Text, Image } from "react-native";
import React from "react";
import CustomButton from "./CustomButton";
import { router } from "expo-router";
const empty = require("../assets/images/empty.png");
const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
        source={empty}
        resizeMode="contain"
        className="w-[270px] h-[215px]"
      />
      <View>
        <Text className="text-white font-semibold text-center text-md">
          {title}
        </Text>
        <Text className="text-white font-bold text-center text-xl">
          {subtitle}
        </Text>
        <CustomButton
          title="Back to Explore"
          containerStyles="my-5"
          handlePress={() => router.push("/create")}
        />
      </View>
    </View>
  );
};

export default EmptyState;
