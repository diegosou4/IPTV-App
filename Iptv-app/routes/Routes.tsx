import { Link } from 'expo-router';
import { View } from 'react-native';
import Home from '../pages/Home';

export default function Route() {
 return (
  <View>
   <Link href="/hpme"><Home/></Link>
  </View>
 );
}