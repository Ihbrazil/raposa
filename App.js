import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Img from './assets/images/raposa.png';

export default function App () {
  return (
    <View style={ estilos.container }>
        
        <View style={ estilos.barraTitulo }>
            <Text style={ estilos.barraTituloTexto }>
              Mamíferos
            </Text>
        </View>

        <View style={estilos.conteudo}>
            <Text style={ estilos.titulo }>
              Raposa
            </Text>
            <Text style={ estilos.texto }>
              Mamífero da família Canidae.
            </Text>
            <Image
              style={ estilos.img }
              source={ Img }/>
        </View>

        <View style={ estilos.barraRodape }>
            <Text style={ estilos.barraRodapeTexto }>
              Isaias
            </Text>
        </View>
    </View>
  )
}

const estilos = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#4530b2'
  },

  barraTitulo: {
    backgroundColor: "#8ffcbf",
    height: 80,
    alignItems:"center",
    justifyContent:"center",
  },

  barraTituloTexto: {
    margin: 20,
    fontSize: 26,
  },
  
  conteudo: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  },

  titulo: {
    color: '#fff',
    fontSize:22,
    width: 100,
    margin: 10,
  },

  texto: {
    color: '#a7abff',
    width: 250,
  },

   img: {
    marginTop: 30,
    width: 250,
    height: 300,
  },

  barraRodape: {
    backgroundColor: "#8ffcbf",
    height: 80,
    alignItems:"center",
    justifyContent:"center",
  },

  barraRodapeTexto: {
    margin: 20,
    fontSize: 26,
    width: 100,
  },
});