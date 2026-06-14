import TabBarIcon from "@/components/TabBarIcon";
import { TABS } from "@/constants/index";
import useAuthStore from "@/store/auth.store";
import { Redirect, Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) return <Redirect href="/sign-in" />;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          marginHorizontal: 20,
          height: 80,
          position: "absolute",
          bottom: 40,
          backgroundColor: "white",
          shadowColor: "#1a1a1a",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 5,
        },
      }}
    >
      {TABS.map(({ id, name, title, icon }) => (
        <Tabs.Screen
          key={id}
          name={name}
          options={{
            title: title,
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} title={title} icon={icon} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
