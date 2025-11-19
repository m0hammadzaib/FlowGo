import "./global.css";
import { View, Text, Pressable } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text className="text-3xl font-bold text-blue-400 mb-4">
        Tailwind Works! 🎉
      </Text>

      <View className="w-40 h-40 bg-neutral-500 rounded-2xl items-center justify-center">
        <Text className="text-white text-lg">Box</Text>
      </View>

      <Pressable className="mt-6 px-6 py-3 bg-purple-600 rounded-xl active:opacity-70">
        <Text className="text-white text-base font-semibold">
          Test Button
        </Text>
      </Pressable>
    </View>
  );
}
