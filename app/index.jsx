import { ScrollView, Text,View,Image } from "react-native"
import { StatusBar } from "expo-status-bar"
import { Redirect,router } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import { images } from "../constants"
import CustomButton from "../components/CustomButton"
import { useGlobalContext } from "../context/GlobalProvider"

const App = () => {

  const {isLoading,isLoggedIn} = useGlobalContext();

  if(!isLoading && isLoggedIn) return <Redirect href="/Home"/>

  return(
    // <View className="flex flex-1 px-2 items-center justify-center bg-white">
    //   <Text className="text-3xl font-pblack">Hello</Text>
    //   <StatusBar style="auto"/>
    //   <Link href='/Home' style={{color:"blue"}}>Go to Home</Link>
    // </View>
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{height:"100%"}}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
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

          <View className="relative mt-5">
            <Text className='text-3xl text-white font-bold text-center'>
              Discover Endless Possibilities with{' '}
              <Text className='text-secondary-200'>Aora</Text>
            </Text>

            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>

          <Text className='text-sm font-pregular text-gray-100 mt-7 text-center'>
            Where creativity meets innovation: embark on a journey of limitless exploration with Aora
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={()=>router.push('/SignIn')}
            containerStyles = 'w-full mt-7'
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light"/>
    </SafeAreaView>
  )
}

export default App;