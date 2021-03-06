import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

//Modelo para desplegar los detalles de los tickets

export default class TicketModel extends React.Component {
  render() {
    //const form = this.props.val.productos;
    //const textInputComponents = form.map((type)=> <TextInput placeholder={type} />)
    const products = this.props.productos;
    return (
      <View key={this.props.keyval} style={styles.note}>
         <Text style={styles.noteText}>Orden:{this.props.val.idOrden}</Text>
         <Text style={styles.noteText}>Cliente: {this.props.val.idCliente}</Text>
         <Text>Hola desde el Cliente</Text>
         {this.props.val.productos.map(producto => <Text key={producto.idProducto}>{producto.nombre}:{producto.cantidad}</Text>)}
         {/*{this.props.val.productos.map((item,key)=>(<Text>{item}</Text>))}*/}
         <Text style={styles.noteText}>Subtotal:{this.props.val.subtotal}</Text>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  note:{
    position:'relative',
    padding:20,
    paddingRight:100,
    borderBottomWidth:2,
    borderBottomColor: '#ededed',
  },
  noteText:{
    paddingLeft: 20,
    borderLeftWidth:10,
    borderLeftColor: '#e91e63',
  },
  noteDelete:{
    position:'absolute',
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'#2980b9',
    padding:10,
    top:10,
    bottom:10,
    right:10,
  },
  noteDeleteText:{
    color:'white',
  }
});