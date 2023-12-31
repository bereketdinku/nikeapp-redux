import { StyleSheet,  View,} from 'react-native';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import store from './store/index'
export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  
});
