import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './src/navigation/BottomTab';
import store from './src/app/store' 
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </Provider>
  );
}
