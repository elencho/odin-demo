import { HomeScreen } from '@/screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBarStackParamList } from '../hooks/tab-bar';

const Tab = createBottomTabNavigator<TabBarStackParamList>();

export const TabBarStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
};
