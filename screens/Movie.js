import { View, Text, Dimensions,Image } from 'react-native'
import React from 'react'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Movie({route, navigation}) {

  const {data} = route.params;

  return (
    <View>
        <Image style={{width:width, height:height/3}} source={{
        uri : data.Poster
    }}/>
      <Text>{data.Title}</Text>
      <Text>Release Year : {data.Year}</Text>
      <Text>Cast : {data.Actors}</Text>
      <Text>Director : {data.Director}</Text>
      <Text>Plot : {data.Plot}</Text>
    </View>
  )
}