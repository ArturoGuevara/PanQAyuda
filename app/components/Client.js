import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from 'react-native';


import ClientModel from '../models/ClientModel'

export default class Client extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      dataSource:[],
    }
  }

  componentDidMount(){
    return fetch('http://demo0257930.mockable.io/clientes')
    .then((response)=>response.json())
    .then((responseJson)=>{
      this.setState({
        isLoading:false,
        dataSource:responseJson.clients,
      })
    })
    .catch((error)=>{
      console.log(error)
    });
  }

  render() {
    //Retrieving the data from the Order view through the navigator. 
    const client = this.props.navigation.getParam('client','NO CLIENT');
    let clients = this.state.dataSource.map((val,key)=>{//Maping the JSON
      //return <TicketModel key={key} keyval={key} val={val}/>});
      if(val.idCliente==client){
        return <ClientModel key={key} keyval={key} val={val} />
      }
      else{
        let i=0;
      }  
    });
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Info del cliente</Text>
        </View>
        <Text>{client}</Text>
        <ScrollView style={styles.scrollContainer}>
           {clients}
        </ScrollView>
      </View>
      )
    }
       
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
 },
 header: {
   backgroundColor: "#E91E63",
   alignItems: "center",
   justifyContent: "center",
   borderBottomWidth: 10,
   borderBottomColor: "#ddd"
 },
 headerText: {
   color: "white",
   fontSize: 18,
   padding: 26
 },
 scrollContainer: {
   flex: 1,
   marginBottom: 100
 },
 footer: {
   position: "absolute",
   bottom: 0,
   left: 0,
   right: 0,
   zIndex: 10
 },
 textInput: {
   alignSelf: "stretch",
   color: "#fff",
   padding: 20,
   backgroundColor: "#252525",
   borderTopWidth: 2,
   borderTopColor: "#ededed"
 },
});
