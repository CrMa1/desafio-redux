import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from '@expo/vector-icons/Feather'
import Home from '../screens/Home/Home';
import Name from '../screens/Name/Name';
const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Feather name="home" size={24} color={'white'} />
          ),
        }}
      />

      <Tab.Screen
        name="Name"
        component={Name}
        options={{
          tabBarLabel: 'Name',
          tabBarIcon: () => (
            <Feather name="list" size={24} color={'white'} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}
export default BottomTab

