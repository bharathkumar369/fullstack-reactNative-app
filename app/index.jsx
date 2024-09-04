import { ScrollView, Text,View,Image } from "react-native"
import { StatusBar } from "expo-status-bar"
import { Link } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import { images } from "../constants"

const App = () => {
  return(
    // <View className="flex flex-1 px-2 items-center justify-center bg-white">
    //   <Text className="text-3xl font-pblack">Hello</Text>
    //   <StatusBar style="auto"/>
    //   <Link href='/Home' style={{color:"blue"}}>Go to Home</Link>
    // </View>
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{height:"100%"}}>
        <View className="w-full justify-center items-center h-full px-4">
          <Image 
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App;