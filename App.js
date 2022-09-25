import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './components/Navbar';
import { NativeRouter, Route, Link} from 'react-router-native';
import Page1 from './components/Page1'
import Page2 from './components/Page2'

export default function App() {
  return (
    <NativeRouter>
    <View style={styles.container}>      
      <Link to= "/" underlayColor="#ffff" style={styles.navItem}>
        <Text>Inicio</Text>
      </Link>
      <Link to= "/page1" underlayColor="#ffff" style={styles.navItem}>
        <Text>Pagina 1</Text>
      </Link>
      <Link to= "/page2" underlayColor="#ffff" style={styles.navItem}>
        <Text>Pagina 2</Text>
      </Link>
      <Text>Esta es mi primera App con React Native</Text>
      <StatusBar style="auto" />

      <Route exact path='/' component={Navbar}/>
      <Route path='/page1' component={Page1}/>
      <Route path='/page2' component={Page2}/>
    </View>
    </NativeRouter>

    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
