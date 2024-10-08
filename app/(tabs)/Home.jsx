import { View, Text, FlatList, Image, RefreshControl, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending'
import EmptyState from '../../components/EmptyState'
import { getAllPosts } from '../../lib/appwrite'
import useAppWrite from '../../lib/useAppWrite'
import VideoCard from '../../components/VideoCard'


const Home = () => {

  const { data:posts, refetch } = useAppWrite(getAllPosts)
  const [refreshing,setRefreshing] = React.useState(false)

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch;
    setRefreshing(false)
  }

  console.log(posts);
  
  
  return (
    <SafeAreaView className='bg-primary h-full'>
      <FlatList
        data={[{id:1},{id:7},{id:4}]}
        //data={[]}
        keyExtractor={(item)=>item.$id}
        renderItem={({item})=>(
          <VideoCard 
            video = {item}
          />
        )}
        ListHeaderComponent={()=>(
          <View className='my-6 px-4 space-y-6'>

            <View className='justify-between items-start flex-row mb-6'>
              <View>
                <Text className='font-pmedium text-sm text-gray-100'>Welcome back</Text>
                <Text className='text-3xl font-psemibold text-gray-100'>Bharath</Text>
              </View>
              <View>
                <Image 
                  source={images.logoSmall}
                  className='w-9 h-10'
                  resizeMode='contain'
                />
              </View>
            </View>

            <SearchInput />

            <View className='w-full flex-1 pt-5 pb-8'>
              <Text className='text-gray-100 text-lg font-pregular mb-3'>Latest Videos</Text>
              <Trending posts={[{id:1},{id:2},{id:3}] ?? []}/>
            </View>
          </View>
        )}
        ListEmptyComponent={()=>(
          <EmptyState
            title="No videos Found"
            subtitle = "Be the first one to upload a video"
          />
        )}
        refreshControl={<RefreshControl 
          refreshing={refreshing}
          onRefresh={onRefresh}
        />}
      />
    </SafeAreaView>
  )
}

export default Home