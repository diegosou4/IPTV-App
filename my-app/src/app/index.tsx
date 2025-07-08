import {View,Image,Text, ScrollView,TextInput, Pressable} from "react-native"
import bg from "../../assets/images/bg-login.jpg";
import Login from "../../components/Login/Login";

export default function Index() {
  return (
    <View className="flex-1 bg-gray-900">
       <Image
        source={bg}
        style={{ position: 'absolute', width: '100%', height: '100%' }}
        resizeMode="cover"
      />
    <ScrollView className="flex-1 items-center justify-center ">
        <Login />     

    </ScrollView>
    </View>
  );
}