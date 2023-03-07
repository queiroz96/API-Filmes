import React, {useEffect, useState}from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator} from 'react-native'

import api from "./src/services/api";
import ListaFilmes from "./src/Filmes";

export default function App(){

  const [Filmes, setFilmes] = useState([]);
  const [Loading, SetLoading] = useState(true)

  useEffect(() => {

    async function LoadFilmes(){
      const response = await api.get('r-api/?api=filmes')
      setFilmes (response.data)

      SetLoading (false)
    }

    LoadFilmes();

  }, []);

  if (Loading) {
    return(
      <View style={{alignItems:'center', justifyContent:'center', flex:1}}>

        <ActivityIndicator
        color='#121212'
        size={45}
        
        />

      </View>
    )
  }

  return(
    <View style={styles.container}>

      <FlatList
      data={Filmes}
      keyExtractor={item => String(item.id)}
      renderItem={({item}) => <ListaFilmes data= {item}/>}
      
      />

      
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:61
   
  }
})