import * as React from 'react';
import {View, Text} from 'react-native';

const HomeScreen = (): JSX.Element => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
    //   <View className="flex-1 items-center justify-center">
    //   <Text>Home Screen</Text>
    // </View>
  );
};

export default HomeScreen;
