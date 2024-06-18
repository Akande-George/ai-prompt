import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
const icon = require("../assets/icons/menu.png");
const VideoCard = ({
  video: {
    title,
    thumbnail,
    video,
    creator: { username, avatar },
  },
}) => {
  const [play, setPlay] = useState(false);
  return (
    <View className="flex-col items-center px-4 mb-14">
      <View className="flex-row gap-3 items-start">
        <View className="flex-row items-center justify-center flex-1">
          <View className="w-[46px] h-[46px] rounded-lg border border-secondary justify-center items-center p-0.5">
            <Image
              source={{ uri: avatar }}
              resizeMode="cover"
              className="h-full w-full rounded-lg"
            />
          </View>
          <View className="justify-center flex-1 ml-3 gap-y-1">
            <Text
              className="font-psemibold text-white text-sm"
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text
              className="font-pregular text-gray-100 text-xs"
              numberOfLines={1}
            >
              {username}
            </Text>
          </View>
        </View>
        <View className="pt-2">
          <Image source={icon} resizeMode="contain" className="h-5 w-5" />
        </View>
      </View>
      {play ? (
        <Text className="text-white text-xl">Playing</Text>
      ) : (
        <TouchableOpacity className="w-full h-60 rounded-xl mt-3 relative justify-center items-center">
          <Image
            source={{ uri: thumbnail }}
            className="w-full h-full rounded-xl mt-3"
            resizeMode="cover"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;
