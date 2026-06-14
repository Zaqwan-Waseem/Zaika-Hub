import { INPUT_FIELDS } from "@/constants/inputFields";
import { showInputFields } from "@/utils/showInputFields";
import React from "react";
import { Modal, ScrollView, Text, View } from "react-native";
import CustomButton from "./CustomButton";
import ModalHeaders from "./ModalHeaders";
const ProfileModal = ({
  visibilty,
  onClose,
}: {
  visibilty: boolean;
  onClose: () => void;
}) => {
  return (
    <Modal
      visible={visibilty}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View className="flex-1 bg-black/50 justify-end">
        <View className="h-[80%] bg-[#FCFBF8] rounded-t-[32px] px-5 pt-3">
          {/* Drag Handle */}
          <View className="w-12 h-1.5 bg-gray-300 rounded-full self-center mb-5" />

          {/* Header */}
          <ModalHeaders title="Edit Your Profile" onClose={onClose} />

          {/* Avatar */}
          <View className="items-center mb-6">
            <View className="w-24 h-24 rounded-full bg-primary/20 items-center justify-center">
              <Text className="text-4xl">🧑‍🍳</Text>
            </View>

            <Text className="text-primary font-semibold mt-3">
              Change Photo
            </Text>
          </View>

          {/* Form */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 100 }}
          >
            <View className="gap-4">{INPUT_FIELDS.map(showInputFields)}</View>
          </ScrollView>

          {/* Footer */}
          <View className="absolute bottom-6 left-5 right-5">
            <CustomButton title="Save Changes" onPress={() => {}} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ProfileModal;
