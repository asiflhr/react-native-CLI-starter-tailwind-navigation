import React, {useEffect} from 'react';
import {View, Image, Text} from 'react-native';

const SplashScreen = ({navigation}: any): JSX.Element => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  });

  return (
    <View className="flex-1 items-center justify-center">
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        }} // Replace with your splash screen image
        className="absolute w-full h-full"
      />

      <View className="absolute w-full h-full bg-black/70" />

      <Text className="text-white text-center font-extrabold text-3xl">
        Welcome to HumanEra
      </Text>
    </View>
  );
};

export default SplashScreen;
