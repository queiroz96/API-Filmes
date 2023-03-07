import React, {useState} from "react";
import { View, Text, Image,StyleSheet, TouchableOpacity, Modal } from "react-native";
import Detalhes from "../Modal";
export default function ListaFilmes({data}){
const [visibleModal, setVisibleModal] = useState(false)
    return(
        <View>

            <View style={styles.card}>
            <Text style={styles.titulo}> {data.nome}</Text>

            <Image
            style={styles.foto}
            source={{uri: data.foto}}
            />

            <View style={styles.saibamais}>
                <TouchableOpacity style={styles.btnSaibaMais} onPress={() => setVisibleModal(true)}>
                    <Text style={{color:'#FFF', fontSize:15, fontWeight:'bold'}}>
                        Saiba Mais
                    </Text>
                </TouchableOpacity>
            </View>

            <Modal transparent={true} animationType={'slide'} visible={visibleModal}>

                <Detalhes Filmes = {data} Voltar={ () => setVisibleModal(false)}/>

            </Modal>

        </View>
        </View>
    )
}

const styles = StyleSheet.create({

    card:{

        backgroundColor:'#FFF',
        margin:15,
        

    },
    foto:{
        height:250,
        zIndex:2
    },

    titulo:{
        padding:15, 
        fontSize:18
    },
    saibamais:{
        alignItems:'flex-end',
        marginTop:-40,
        zIndex:3
    },
    btnSaibaMais:{
        backgroundColor:'red',
        padding:10,
        marginRight:5,
        borderRadius:4,
        
    }
})