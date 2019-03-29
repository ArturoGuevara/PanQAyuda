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

import {StackNAvigator} from 'react-navigation'

import Order from './Order'

export default class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      dataSource:[],
      noteArray:[]
    }
  }

  componentDidMount(){
    //return fetch('https://c2abae51-a0a9-4b7b-aee5-e08000c52021.mock.pstmn.io')
    //return fetch('https://facebook.github.io/react-native/movies.json')
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

 /* getOrders = () => {
    fetch("https://c2abae51-a0a9-4b7b-aee5-e08000c52021.mock.pstmn.io")
    .then((res)=>res.json())
    .then(parsedRes=>{
      const ordersArray=[];
      for(const key in parsedRes){
        ordersArray.push({
          id:key,
          idUsuario:parsedRes[key].idUsuario,
          total:parsedRes[key].Total,
          formaDePago:parsedRes[key].FormaDePago
        });
      }
      this.setState({
        noteArray: ordersArray
      });
    })
    .catch((err)=>alert(err));
  };
  
  let orders = this.state.noteArray.map((val,key) =>{
    return <Order key={key} keyval={key} val={val}
           deleteMethod={()=>this.deleteNote(key)}/>
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>- Ordenes -</Text>
      </View>

      <ScrollView style={styles.scrollContainer}>
        {orders}
      </ScrollView>

      <View style={styles.footer}>
        <TextInput
        style={styles.textInput}
        onChangeText={(noteText)=> this.setState({noteText})}
        value={this.state.orderText}
        placeholder='>note'
        placeholderTextColor='white'
        underlineColorAndroid='transparent'>
        </TextInput>
      </View>

      <TouchableOpacity onPress={this.addNote.bind(this)}style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      );
    }*/
  render() {
    if(this.state.isLoading){//Loading page
      return(
        <View style={styles.container}>
          <ActivityIndicator/>
        </View>
      )
    }
    else{//Ṕage loaded
      let orders = this.state.dataSource.map((val,key)=>{//Maping the JSON
        if(val.estatus=="Pendiente"){
          return <Order key={key} keyval={key} val={val}
          deleteMethod={()=>this.deleteNote(key)}/>
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
             {orders}
          </ScrollView>
        </View>
      )
    }
       
  }
  /*addNote(){
    if(this.state.noteText){
      var d = new Date();
      this.state.noteArray.push({
        'date': d.getFullYear()+
        "/"+(d.getMonth()+1)+
        "/"+d.getDate(),
        'note': this.state.noteText
      });
      this.setState({noteArray:this.state.noteArray})
      this.setState({noteText:''});
    }
     <View style={styles.container}>
          <View style={{marginBottom:20}}>
            <Button title="Cargar ordenes" onPress=
            {this.getOrders}/>
          </View>
          <FlatList
            data={this.state.noteArray}
            renderItem={
              ({item})=><Text>{item.formaDePago}</Text>
            }
            keyExtractor={(item,index)=>index.toString()}
            />
        </View>
      );
  }*/
//TODO:
//Cambiar el método para hacer update en el estatus del pedido en lugar de borrarlo
  deleteNote(key){
    this.state.noteArray.splice(key,1);
    this.setState({noteArray:this.state.noteArray})
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
