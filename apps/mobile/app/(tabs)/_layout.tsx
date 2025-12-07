import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{ title: "Today" }}
      />
      <Tabs.Screen
        name="promises"
        options={{ title: "Promises" }}
      />
      <Tabs.Screen
        name="reflection"
        options={{ title: "Reflection" }}
      />
      <Tabs.Screen
        name="attention"
        options={{ title: "Attention" }}
      />
    </Tabs>
  );
}
