import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";

type FoodItem = {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  bg: string;
  image: string;
};

const CartModal = ({
  visible,
  onClose,
  item,
}: {
  visible: boolean;
  onClose: () => void;
  item: FoodItem | null;
}) => {
  if (!item) return null;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
      transparent
    >
      <View className="flex-1 bg-black/50 justify-end">
        <View className="rounded-t-[32px] bg-[#FCFBF8] px-5 pt-4 pb-6">
          <View className="items-center mb-4">
            <View className="w-14 h-1.5 rounded-full bg-gray-300" />
          </View>

          <View className="flex-row items-start justify-between mb-4">
            <View className="flex-1 pr-4">
              <Text className="text-xs font-bold uppercase tracking-[2px] text-primary">
                {item.category}
              </Text>
              <Text className="text-2xl font-extrabold text-dark-100 mt-1">
                {item.name}
              </Text>
              <View className="flex-row items-center mt-2">
                <Ionicons name="star" size={14} color="#FFD23F" />
                <Text className="ml-1 text-sm font-semibold text-dark-100">
                  {item.rating.toFixed(1)} rating
                </Text>
              </View>
            </View>

            <TouchableOpacity
              onPress={onClose}
              className="h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm"
            >
              <Ionicons name="close" size={18} color="#111827" />
            </TouchableOpacity>
          </View>

          <View
            className="rounded-3xl mb-5 overflow-hidden"
            style={{ backgroundColor: item.bg }}
          >
            <Image
              source={{ uri: item.image }}
              style={{ width: "100%", height: 180 }}
              contentFit="cover"
            />
          </View>

          <View className="rounded-3xl bg-white p-4 shadow-sm">
            <View className="flex-row items-end justify-between mb-3">
              <View>
                <Text className="text-xs uppercase tracking-[2px] text-gray-400">
                  Price
                </Text>
                <Text className="text-2xl font-extrabold text-dark-100">
                  ${item.price.toFixed(2)}
                </Text>
              </View>
              <View className="rounded-full bg-primary/10 px-3 py-1.5 justify-center">
                <Text className="text-xs font-semibold text-primary">
                  Fresh & Hot
                </Text>
              </View>
            </View>

            <Text className="text-sm text-gray-600 leading-5">
              A tasty {item.category.toLowerCase()} favorite with bold flavor,
              fresh toppings, and the perfect crunch for your next meal.
            </Text>

            <View className="mt-4 flex-row items-center justify-between rounded-2xl bg-[#FFF7EC] p-3">
              <View>
                <Text className="text-xs uppercase tracking-[2px] text-gray-400">
                  Delivery
                </Text>
                <Text className="text-sm font-semibold text-dark-100">
                  25–35 min
                </Text>
              </View>
              <View>
                <Text className="text-xs uppercase tracking-[2px] text-gray-400">
                  Spice
                </Text>
                <Text className="text-sm font-semibold text-dark-100">
                  Medium
                </Text>
              </View>
            </View>
          </View>

          <View className="mt-5">
            <TouchableOpacity
              className="h-14 items-center justify-center rounded-full bg-primary"
              onPress={onClose}
            >
              <Text className="text-base font-bold text-white">
                Add to Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CartModal;
