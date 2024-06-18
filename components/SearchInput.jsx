import { View, Text, TextInput, Image } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
const search = require("../assets/icons/search.png");
const SearchInput = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="border-2 border-black-200 w-full h-16 px-4 rounded-2xl focus:border-secondary bg-black-100 items-center flex-row space-x-4">
        <TextInput
          className="text-base mt-0.5 text-white font-pregular flex-1"
          value={value}
          placeholder="Searcg for a video topic"
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Image className="w-6 h-6" source={search} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchInput;
