import React from "react";
import { Text, View } from "react-native";
import CustomButton from "./CustomButton";
const ModalHeaders = ({
  title,
  onClose,
}: {
  title: string;
  onClose: () => void;
}) => {
  return (
    <View className="flex-row items-center justify-between mb-6">
      <Text className="text-2xl font-bold text-primary/90">{title}</Text>

      <CustomButton
        title="Close"
        style="bg-primary w-[25%] px-4 py-2 rounded-full"
        onPress={onClose}
      />
    </View>
  );
};

export default ModalHeaders;
