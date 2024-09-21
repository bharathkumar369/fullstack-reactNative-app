import { View, Text } from 'react-native'
import React from 'react'

const VideoCard = ({ video: { title, thumbnail, video, creator } }) => {
  return (
    <View className="flex-col items-center px-4 mb-14">
        <Text className='text-2xl text-white'>{title ?? 'No title available'}</Text>
        <Text className='text-lg text-gray-300'>{creator?.username ?? 'Unknown creator'}</Text>
    </View>
  )
}

export default VideoCard