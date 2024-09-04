import { Text,View } from "react-native"
import { StatusBar } from "expo-status-bar"
import { Link } from "expo-router"

const App = () => {
  return(
    <View className="flex flex-1 px-2 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">Hello</Text>
      <StatusBar style="auto"/>
      <Link href='/Home' style={{color:"blue"}}>Go to Home</Link>
    </View>
  )
}

export default App;