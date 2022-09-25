import React from 'react';
import { Text, View, StyleSheet } from 'react-native'; 
 
const Navbar = () => {
  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.textoMensaje}>Hola Mundo !</Text>
    </View>
  )
}
 
const estilos = StyleSheet.create({
  
  contenedor: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
 
  textoMensaje: {    
    fontSize: 40,
    fontWeight: "bold"
  }
 
});
 
export default Navbar;