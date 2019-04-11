import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList
} from 'react-native';

import {StackNavigator} from 'react-navigation'

import CompleteOrder from '../models/CompleteOrder'

export default class Complete extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      dataSource:[],
      noteArray:[]
    }
  }

  componentDidMount(){
    return fetch('http://demo0257930.mockable.io/pqapp')
    .then((response)=>response.json())
    .then((responseJson)=>{
      this.setState({
        isLoading:false,
        dataSource:responseJson.orders,
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
      let completeOrders = this.state.dataSource.map((val,key)=>{//Maping the JSON
        if(val.estatus=="Completado"){
          return <CompleteOrder key={key} keyval={key} val={val}
          /*deleteMethod={()=>this.deleteNote(key)}*//>
        }
        else{
          let i=0;
        }
      }); 
      return(
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>- Ordenes -</Text>
          </View>
          <ScrollView style={styles.scrollContainer}>
             {completeOrders}
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
