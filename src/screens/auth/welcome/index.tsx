import { Pressable, Text, View } from 'react-native';
import React from 'react';
import { WelcomeScreenProps } from './types';

export const WelcomeScreen = ({ navigation }: WelcomeScreenProps) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Pressable onPress={() => navigation.navigate('Main')}>
        <Text>Press to navigate</Text>
      </Pressable>
    </View>
  );
};
