import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
type CartItem = {
  id: string;
  name: string;
  price: number;
  qty: number;
  customizations: string[];
  color: string;
};
const INITIAL_ITEMS: CartItem[] = [
  {
    id: "1",
    name: "Burger Ferguson",
    price: 16.4,
    qty: 1,
    customizations: ["Spicy", "Energy Drink"],
    color: "#F2A007",
  },
  {
    id: "2",
    name: "Rainbow Pizza",
    price: 24.0,
    qty: 1,
    customizations: ["Extra Cheese", "Mushroom"],
    color: "#0F4C3A",
  },
  {
    id: "3",
    name: "Chocolate Milkshake",
    price: 7.5,
    qty: 2,
    customizations: ["Whipped Cream"],
    color: "#E04A1F",
  },
];
const DELIVERY_FEE = 2.99;
const DISCOUNT = 0.5;
const CartScreen = () => {
  const [items, setItems] = useState<CartItem[]>(INITIAL_ITEMS);
  const updateQty = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((i) =>
          i.id === id ? { ...i, qty: Math.max(0, i.qty + delta) } : i,
        )
        .filter((i) => i.qty > 0),
    );
  };
  const subtotal = items.reduce((acc, i) => acc + i.price * i.qty, 0);
  const total = subtotal + DELIVERY_FEE - DISCOUNT;
  const renderItem = ({ item }: { item: CartItem }) => (
    <View className="flex-row bg-white rounded-3xl p-4 mb-4 shadow-sm">
      <View
        className="w-20 h-20 rounded-2xl items-center justify-center"
        style={{ backgroundColor: item.color + "22" }}
      >
        <View
          className="w-14 h-14 rounded-full"
          style={{ backgroundColor: item.color }}
        />
      </View>
      <View className="flex-1 ml-4 justify-between">
        <View>
          <Text className="text-base font-bold text-dark-100 uppercase">
            {item.name}
          </Text>
          <Text className="text-xs text-gray-500 mt-1" numberOfLines={1}>
            {item.customizations.join(" • ")}
          </Text>
        </View>
        <View className="flex-row items-center justify-between mt-2">
          <Text className="text-primary font-bold text-base">
            ${(item.price * item.qty).toFixed(2)}
          </Text>
          <View className="flex-row items-center">
            <TouchableOpacity
              onPress={() => updateQty(item.id, -1)}
              className="w-7 h-7 rounded-full bg-primary/10 items-center justify-center"
            >
              <Text className="text-primary text-lg font-bold">-</Text>
            </TouchableOpacity>
            <Text className="mx-3 font-semibold">{item.qty}</Text>
            <TouchableOpacity
              onPress={() => updateQty(item.id, 1)}
              className="w-7 h-7 rounded-full bg-primary items-center justify-center"
            >
              <Text className="text-white text-lg font-bold">+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
  return (
    <SafeAreaView className="flex-1/2 bg-[#FCFBF8]">
      {/* Header */}
      <View className="flex-row items-center justify-between px-5 pt-4 pb-2">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-10 h-10 rounded-full bg-white items-center justify-center shadow-sm"
        >
          <Text className="text-xl">←</Text>
        </TouchableOpacity>
        <Text className="text-lg font-bold text-dark-100">Your Cart</Text>
        <View className="w-10 h-10" />
      </View>
      {items.length === 0 ? (
        <View className="flex-1 items-center justify-center px-8">
          <View className="w-24 h-24 rounded-full bg-primary/10 items-center justify-center mb-4">
            <Text className="text-4xl">🛒</Text>
          </View>
          <Text className="text-xl font-bold text-dark-100">
            Your cart is empty
          </Text>
          <Text className="text-gray-500 text-center mt-2">
            Add some delicious meals to get started
          </Text>
          <View className="mt-6 w-full">
            <CustomButton
              title="Browse Menu"
              onPress={() => router.push("/search")}
            />
          </View>
        </View>
      ) : (
        <>
          <FlatList
            data={items}
            keyExtractor={(i) => i.id}
            renderItem={renderItem}
            contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 12 }}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={
              <View className="bg-white rounded-3xl p-5 mt-2 mb-4 shadow-sm">
                <Text className="font-bold text-dark-100 mb-3 text-base">
                  Payment Summary
                </Text>
                <Row
                  label={`Total Items (${items.length})`}
                  value={`$${subtotal.toFixed(2)}`}
                />
                <Row
                  label="Delivery Fee"
                  value={`$${DELIVERY_FEE.toFixed(2)}`}
                />
                <Row
                  label="Discount"
                  value={`-$${DISCOUNT.toFixed(2)}`}
                  highlight
                />
                <View className="h-px bg-gray-200 my-3" />
                <Row label="Total" value={`$${total.toFixed(2)}`} bold />
              </View>
            }
          />
          <View className="px-5 mt-8">
            <CustomButton
              title={`Order Now  •  $${total.toFixed(2)}`}
              style="bg-primary rounded-full h-14"
              onPress={() => {}}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};
const Row = ({
  label,
  value,
  bold,
  highlight,
}: {
  label: string;
  value: string;
  bold?: boolean;
  highlight?: boolean;
}) => (
  <View className="flex-row justify-between py-1">
    <Text
      className={`text-gray-600 ${bold ? "font-bold text-dark-100 text-base" : ""}`}
    >
      {label}
    </Text>
    <Text
      className={`${
        bold
          ? "font-bold text-dark-100 text-base"
          : highlight
            ? "text-accent-green font-semibold"
            : "text-dark-100 font-semibold"
      }`}
    >
      {value}
    </Text>
  </View>
);
export default CartScreen;
