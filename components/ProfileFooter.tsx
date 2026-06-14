import React from "react";
import { View } from "react-native";
import CustomButton from "./CustomButton";

const ProfileFooter = ({ onPress }: { onPress: () => void }) => {
  return (
    <>
      {/* Action buttons */}
      <View className="mt-6">
        <CustomButton title="Edit Profile" onPress={onPress} />
      </View>
      <View className="mt-2">
        <CustomButton
          title="⎋ Logout"
          style="bg-white mt-2 border-2 border-primary/40 rounded-full py-4 items-center flex-row justify-center"
          textStyle="text-primary text-lg mr-2"
        />
      </View>
    </>
  );
};

export default ProfileFooter;
