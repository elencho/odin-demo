import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CreateOrderScreen } from '@/screens';
import { MainStackParamList } from '../hooks/main';
import { TabBarStack } from './tab-bar';

const Stack = createNativeStackNavigator<MainStackParamList>();

export const MainStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="TabBar" component={TabBarStack} />
      <Stack.Screen name="CreateOrder" component={CreateOrderScreen} />
    </Stack.Navigator>
  );
};
