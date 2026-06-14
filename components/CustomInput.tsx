import { CustomInputProps } from "@/type";
import { Ionicons } from "@expo/vector-icons";
import cn from "clsx";
import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
const CustomInput = ({
  placeholder = "Enter text",
  value,
  onChangeText,
  label,
  secureTextEntry = false,
  keyboardType = "default",
  leftIcon,
}: CustomInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className="w-full gap-2">
      <Text className="label">{label}</Text>

      <View
        className={cn(
          "flex-row items-center border rounded-2xl px-5",
          isFocused ? "border-primary" : "border-gray-200",
        )}
      >
        {leftIcon && (
          <Ionicons
            name={leftIcon as keyof typeof Ionicons.glyphMap}
            size={20}
            color="#F97316"
          />
        )}

        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          placeholderTextColor="#888"
          className="flex-1 ml-3"
        />
      </View>
    </View>
  );
};

export default CustomInput;
