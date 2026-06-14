import ProfileModal from "@/components/ProfileModal";
import ProfileFooter from "@/components/ProfileFooter";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Row = {
  icon: string;
  label: string;
  value: string;
  multiline?: boolean;
};
const PROFILE_ROWS: Row[] = [
  { icon: "👤", label: "Full Name", value: "Zaqwan Waseem" },
  { icon: "✉️", label: "Email", value: "zaqwanwaseem@gmail.com" },
  { icon: "📞", label: "Phone Number", value: "+91 7317444064" },
  {
    icon: "📍",
    label: "Address 1 - (Home)",
    value: "123 Main Street, Springfield, IL 62704",
    multiline: true,
  },
  {
    icon: "🏢",
    label: "Address 2 - (Work)",
    value: "456 Business Ave, Building B, Floor 3, New York, NY 10001",
    multiline: true,
  },
];

const ProfileScreen = () => {
  const [editProfileModal, setEditProfileModal] = useState<boolean>(false);

  return (
    <SafeAreaView className="flex-1 bg-[#FCFBF8]">
      {/* Header */}

      <ProfileModal
        visibilty={editProfileModal}
        onClose={() => setEditProfileModal(false)}
      />

      <View className="flex-row items-center justify-between px-5 pt-4 pb-2">
        <TouchableOpacity className="w-10 h-10 rounded-full bg-white items-center justify-center shadow-sm">
          <Text className="text-xl">←</Text>
        </TouchableOpacity>
        <Text className="text-lg font-bold text-dark-100">Profile</Text>
        <TouchableOpacity className="w-10 h-10 rounded-full bg-white items-center justify-center shadow-sm">
          <Text>🔔</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Avatar */}
        <View className="items-center mt-4">
          <View className="relative">
            <View className="w-28 h-28 rounded-full bg-primary/20 items-center justify-center overflow-hidden border-4 border-white">
              <Text className="text-5xl">🧑‍🍳</Text>
            </View>
            <TouchableOpacity
              onPress={() => setEditProfileModal(true)}
              className="absolute bottom-0 right-0 w-9 h-9 rounded-full bg-primary items-center justify-center border-2 border-white"
            >
              <Text className="text-white">✏️</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Info card */}
        <View className="bg-white rounded-3xl p-5 mt-6 shadow-sm">
          {PROFILE_ROWS.map((row, idx) => (
            <View
              key={row.label}
              className={`flex-row ${idx !== 0 ? "mt-5" : ""}`}
            >
              <View className="w-11 h-11 rounded-full bg-primary/10 items-center justify-center">
                <Text className="text-lg">{row.icon}</Text>
              </View>
              <View className="flex-1 ml-4">
                <Text className="text-xs text-gray-500">{row.label}</Text>
                <Text
                  className="text-dark-100 font-semibold mt-1"
                  numberOfLines={row.multiline ? 3 : 1}
                >
                  {row.value}
                </Text>
              </View>
            </View>
          ))}
        </View>
        <ProfileFooter onPress={() => setEditProfileModal(true)} />
      </ScrollView>
    </SafeAreaView>
  );
};
export default ProfileScreen;
