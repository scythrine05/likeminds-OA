import { View,ScrollView, TextInput, StyleSheet, Text } from 'react-native'
import React from 'react'

//Components
import Card from "../components/Card";

export default function Main({navigation}) {
  const [search, setSearch] = React.useState("");
  const [data, setData] = React.useState(null);
  const [empty, setEmpty] = React.useState(false); 

  const fetchMovies = async(search) => {
    try{
      const response = await fetch(`http://www.omdbapi.com/?apikey=57ed164d&t=${search}`);
      const jsonData = await response.json();
      if(!jsonData.Error) {
        setEmpty(false);
        setData(jsonData);
      }
      else{
        setEmpty(true);  
      }
    }
    catch(e){
      throw(e);
    }
  }

  return (
    <ScrollView>
    <View style={styles.search_container}>
    <TextInput
      style={styles.search}
      onChangeText={setSearch}
      onSubmitEditing={() => fetchMovies(search).catch(e => console.error(e))}
      value={search}/>
    </View>
    <View>
    {empty ? <Text>Movie Not Found</Text> : data ? <Card data={data} navigation={navigation} /> : <Text>No Recent Searches</Text>}
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    search: {
        backgroundColor: '#ddd',
        margin: 5,
        padding: 8,
        borderRadius: 10,
    },
})