import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from 'react-native';

import {StackNavigator} from 'react-navigation'

import TicketModel from '../models/TicketModel'

export default class Ticket extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      dataSource:[],
      noteArray:[]
    }
  }

  componentDidMount(){
    return fetch('http://demo0257930.mockable.io/tickets')
    .then((response)=>response.json())
    .then((responseJson)=>{
      this.setState({
        isLoading:false,
        dataSource:responseJson.tickets,
      })
    })
    .catch((error)=>{
      console.log(error)
    });
  }

  render() {
    if(this.state.isLoading){//Loading page
      return(
        <View style={styles.container}>
          <ActivityIndicator/>
        </View>
      )
    }
    else{//Ṕage loaded
      let ticket = this.state.dataSource.map((val,key)=>{//Maping the JSON
        //return <TicketModel key={key} keyval={key} val={val}/>});
        if(val.idCompra==this.props.navigation.state.params.idCompra&&val.idCliente==this.props.navigation.state.params.idCompra){
          return <TicketModel key={key} keyval={key} val={val}/>
        }
        else{
          let i=0;
        }  
      }); 
      return(
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Detalles de la orden</Text>
          </View>
          <ScrollView style={styles.scrollContainer}>
             {ticket}
          </ScrollView>
        </View>
      )
    }
       
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
