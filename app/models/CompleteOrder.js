import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

//Modelo para desplegar las ordenes que ya fueron completadas. 

export default class CompleteOrder extends React.Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.note}>
         <Text style={styles.noteText}>Orden:{this.props.val.idOrden}</Text>
         <Text style={styles.noteText}>Cliente: {this.props.val.idCliente}</Text>
         <Text style={styles.noteText}>Fecha: {this.props.val.fecha}</Text>
         <Text style={styles.noteText}>Pago: {this.props.val.pago}</Text>
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
