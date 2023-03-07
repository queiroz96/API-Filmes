import React from "react";

import { View, Text, StyleSheet, TouchableOpacity} from "react-native";

export default function Detalhes (props){
    return(
        <View style={styles.container}>
            
            <View style={styles.modalContainer}> 

            <TouchableOpacity style={styles.BtnVoltar} onPress={props.Voltar}>
                <Text style={{color:'#FFF', fontSize:16, marginLeft:5}}>Voltar</Text>
            </TouchableOpacity>


            <Text style={styles.titulo}>{props.Filmes.nome}</Text>
            <Text style={styles.Sinopse}>Sinopse:</Text>
            <Text style={styles.descricao}>{props.Filmes.sinopse}</Text>
            </View>
           

        </View>
    )
}

const styles = StyleSheet.create({
    container:{

        marginTop:50,
        marginLeft:10,
        marginRight:10,
        flex:1,
        alignItems:'center',
        justifyContent:'flex-end'


    },

    modalContainer:{
        height:'80%',
        backgroundColor:'#121212',
        width:'100%',
        borderTopRightRadius:5,
        borderTopLeftRadius:5

    },

    BtnVoltar:{
        backgroundColor:'red',
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        height:40,
        justifyContent:'center',


    },

    titulo:{
        color:'#FFF',
        textAlign:'center',
        padding:10,
        fontSize:25
    },

    Sinopse:{
    color:'#FFF',
    marginLeft:10,
    fontSize:18,
    marginBottom:10


    },

    descricao:{
        color:'#FFF',
        marginLeft:10,
        marginRight:10,
        fontSize:15
    }
    
})