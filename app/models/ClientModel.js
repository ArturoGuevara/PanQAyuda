import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import call from 'react-native-phone-call';
import email from 'react-native-email';
//Modelo para desplegar los detalles de los tickets

//Function that makes the call
function makeCall(args){
  call(args);
}
//Function that sends an email.
function sendEmail(to){
  email(to,{subject:'Pedido PanQAyuda'}).catch(console.error);
}
export default class ClientModel extends React.Component {
  render() {
    //const form = this.props.val.productos;
    //const textInputComponents = form.map((type)=> <TextInput placeholder={type} />)
    const telephone = this.props.val.telefonfo;
    const email = this.props.val.correo;
    const args = {number:telephone, prompt:false}
    return (
      <View key={this.props.keyval} style={styles.note}>
         <Text style={styles.noteText}>idCliente:{this.props.val.idCliente}</Text>
         <Text style={styles.noteText}>Nombre:{this.props.val.nombre}</Text>
         <Text style={styles.noteText}>Teléfono:{this.props.val.telefonfo}</Text>
         <Text style={styles.noteText}>Correo:{this.props.val.correo}</Text>
         <Button title="Llamar Cliente" onPress={()=>makeCall(args)}></Button>
         <Button title="Mandar Correo" onPress={()=>sendEmail(email)}></Button>
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