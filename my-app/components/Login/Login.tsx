import { View ,TextInput, Pressable,Text, ScrollView} from "react-native";
import React from "react";

import { handleChange } from "./LoginFunctions";

export default function Login() {
    const [username, setUsername] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [playlist, setPlaylist] = React.useState<string>('');
    const [server, setServer] = React.useState<string>('');

    return (
           <View className="bg-sky-500 bg-opacity-80 p-12 rounded-lg shadow-lg items-center ">
        <Text className="m:text-md md:text-xl xl:text-2xl font-bold text-white">Iptv App Login</Text>
        <Text className="text-white sm:text-md md:text-xl xl:text-2xl mt-2">Please enter your credentials</Text>
        <View className="flex flex-col gap-4 mt-2">
          <View>
                <TextInput
                  placeholder="Playlist"
                  className="bg-white p-2 rounded-md"
                  onChangeText={(event) => handleChange(event, setPlaylist)}
                />
            </View>
           <View>
                <TextInput
                  placeholder="Username"
                  className="bg-white p-2 rounded-md"
                  onChangeText={(event) => handleChange(event, setUsername)}
                  />
            </View>
            <View>
              <TextInput
                placeholder="Password"
                className="bg-white p-2 rounded-md"
                secureTextEntry={true}
                onChangeText={(event) => handleChange(event, setPassword)}
                />
            </View>
                 <View className="">
                <TextInput
                  placeholder="Server"
                  className="bg-white p-2 rounded-md"
                  onChangeText={(event) => handleChange(event, setServer)}
                  />
            </View>
            <View>
              <Pressable className="bg-white p-2 rounded-md w-full">
                <Text className="text-center text-gray-900 font-bold">Login</Text>
              </Pressable>
            </View>
          </View>
        </View>
        )
}