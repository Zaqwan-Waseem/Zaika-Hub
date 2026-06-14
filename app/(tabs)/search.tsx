import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React, { useMemo, useState } from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CATEGORIES = [
  { id: "all", label: "All", icon: "restaurant-outline" },
  { id: "burger", label: "Burgers", icon: "fast-food-outline" },
  { id: "pizza", label: "Pizza", icon: "pizza-outline" },
  { id: "burrito", label: "Burrito", icon: "leaf-outline" },
  { id: "drinks", label: "Drinks", icon: "beer-outline" },
] as const;

const TRENDING = [
  "Summer Combo",
  "Cheesy Pizza",
  "Double Burger",
  "Burrito Bowl",
  "Cold Brew",
];

const ITEMS = [
  {
    id: "1",
    name: "Summer Combo",
    category: "burger",
    price: 12.99,
    rating: 4.8,
    bg: "#E04A1F",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
  },
  {
    id: "2",
    name: "Burger Bash",
    category: "burger",
    price: 9.49,
    rating: 4.6,
    bg: "#F26B22",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400",
  },
  {
    id: "3",
    name: "Pizza Party",
    category: "pizza",
    price: 14.0,
    rating: 4.9,
    bg: "#0F4C3A",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
  },
  {
    id: "4",
    name: "Loaded Burrito",
    category: "burrito",
    price: 8.5,
    rating: 4.5,
    bg: "#F2A007",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400",
  },
];

export default function Search() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<string>("all");

  const filtered = useMemo(() => {
    return ITEMS.filter((it) => {
      const matchCat = active === "all" || it.category === active;
      const matchQ = it.name.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQ;
    });
  }, [query, active]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32"
      >
        {/* Header */}
        <View className="px-5 pt-4 pb-2 flex-row items-center justify-between">
          <View>
            <Text className="text-primary text-xs font-bold tracking-widest">
              DELIVER TO
            </Text>
            <View className="flex-row items-center gap-1">
              <Text className="text-xl font-bold text-dark-100">Croatia</Text>
              <Ionicons name="chevron-down" size={16} color="#111" />
            </View>
          </View>
          <TouchableOpacity className="w-11 h-11 rounded-full bg-dark-100 items-center justify-center">
            <Ionicons name="bag-outline" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Title */}
        <View className="px-5 mt-4">
          <Text className="text-3xl font-extrabold text-dark-100">
            Find your{"\n"}
            <Text className="text-primary">favorite food</Text>
          </Text>
        </View>

        {/* Search bar */}
        <View className="px-5 mt-5 flex-row items-center gap-3">
          <View className="flex-1">
            <CustomInput
              placeholder="Search burgers, pizza, drinks…"
              value={query}
              onChangeText={setQuery}
            />
          </View>
          <TouchableOpacity className="w-14 h-14 rounded-2xl bg-primary items-center justify-center">
            <Ionicons name="options-outline" size={22} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerClassName="px-5 gap-3 mt-6"
        >
          {CATEGORIES.map((c) => {
            const isActive = active === c.id;
            return (
              <TouchableOpacity
                key={c.id}
                onPress={() => setActive(c.id)}
                className={`flex-row items-center px-4 py-3 rounded-full border ${
                  isActive
                    ? "bg-primary border-primary"
                    : "bg-white border-gray-200"
                }`}
              >
                <Ionicons
                  name={c.icon as any}
                  size={16}
                  color={isActive ? "#fff" : "#111"}
                />
                <Text
                  className={`ml-2 font-semibold ${
                    isActive ? "text-white" : "text-dark-100"
                  }`}
                >
                  {c.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Trending chips */}
        <View className="px-5 mt-6">
          <Text className="text-base font-bold text-dark-100 mb-3">
            Trending now
          </Text>
          <View className="flex-row flex-wrap gap-2">
            {TRENDING.map((t) => (
              <TouchableOpacity
                key={t}
                onPress={() => setQuery(t)}
                className="px-3 py-2 rounded-full bg-gray-100"
              >
                <Text className="text-sm text-dark-100">{t}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Results */}
        <View className="px-5 mt-6 flex-row items-center justify-between">
          <Text className="text-lg font-bold text-dark-100">
            {filtered.length} result{filtered.length === 1 ? "" : "s"}
          </Text>
          <TouchableOpacity className="flex-row items-center">
            <Text className="text-primary font-semibold mr-1">Sort</Text>
            <Ionicons name="swap-vertical" size={16} color="#E04A1F" />
          </TouchableOpacity>
        </View>

        <FlatList
          data={filtered}
          scrollEnabled={false}
          keyExtractor={(it) => it.id}
          contentContainerClassName="px-5 mt-4 gap-4"
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.9}
              className="rounded-3xl overflow-hidden flex-row items-center p-4"
              style={{ backgroundColor: item.bg }}
            >
              <View className="flex-1 pr-3">
                <Text className="text-white text-xl font-extrabold uppercase">
                  {item.name}
                </Text>
                <View className="flex-row items-center mt-2">
                  <Ionicons name="star" size={14} color="#FFD23F" />
                  <Text className="text-white ml-1 text-xs font-semibold">
                    {item.rating}
                  </Text>
                  <Text className="text-white/80 mx-2">•</Text>
                  <Text className="text-white text-xs font-semibold">
                    ${item.price.toFixed(2)}
                  </Text>
                </View>
                <View className="mt-4 self-start">
                  <View className="flex-row items-center border border-white/80 rounded-full px-3 py-1.5">
                    <Text className="text-white text-xs mr-2">Order</Text>
                    <Ionicons name="arrow-forward" size={12} color="#fff" />
                  </View>
                </View>
              </View>
              <Image
                source={{ uri: item.image }}
                style={{ width: 110, height: 110, borderRadius: 16 }}
                contentFit="cover"
              />
            </TouchableOpacity>
          )}
          ListEmptyComponent={
            <View className="items-center py-12">
              <Ionicons name="search-outline" size={42} color="#999" />
              <Text className="text-gray-500 mt-3">
                No matches. Try another keyword.
              </Text>
            </View>
          }
        />

        {/* CTA */}
        <View className="px-5 mt-8">
          <CustomButton
            title="Browse full menu"
            style="bg-primary rounded-full h-14"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
