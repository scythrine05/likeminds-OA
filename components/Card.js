import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'

export default function Card({data, navigation}) {

  return (
    <Pressable onPress={()=> navigation.navigate("Movie", {data:data})}>
    <View style={styles.card}>
    <Image style={styles.poster} source={{
        uri : data.Poster
    }}/>
    <View style={styles.description}>
    <Text style={styles.big_text}>{data.Title}</Text>
    <Text style={styles.small_text}>{data.Year}</Text>
    </View>
  </View>
  </Pressable>
  )
}

const styles = StyleSheet.create({
    card:{
        flexDirection:'row',
        alignItems: "center",
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    poster:{
        height : 120,
        width : 120,
        borderRadius: 5,
    },
    big_text:{
        fontSize:20,
    },
    description:{
        marginHorizontal:20,
    }
})