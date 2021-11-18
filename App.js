import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import { Text } from "react-native";

export default function App() {
  const [ready, setReady] = useState(false);

  // props
  const onFinish = () => setReady(true);
  //startAsync
  const startLoading = async () => {
    //여기에 await. preload. 어플 화면이 뜨기 전에 여기서 호출할 것들. 아이콘 등등...
    await new Promise((resolve) => setTimeout(resolve, 10000));
  };

  if (!ready) {
    return (
      <AppLoading
        startAsync={startLoading}
        onFinish={onFinish}
        onError={console.log}
      />
    );
  }
  return <Text>We are done Loading</Text>;
}
