import "./global.css";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import { useState } from "react";

export default function App() {

  const [text, settext] = useState("");
  const [submit, setsubmit] = useState([]);

  const handlesubmit = () => {
    if (text.trim().length === 0) return;

    setsubmit([...submit, text]);
    settext("");
  };

  return (
    <SafeAreaView className="flex-1 items-center bg-black">
      <Text className="text-blue-600 text-5xl font-extrabold">TodoZ</Text>

      <TodoInput 
        value={text}  
        input={settext} 
        onSubmit={handlesubmit} 
      />
     <TodoList list={submit}/>
    </SafeAreaView>
  );
}
