import React, { Component } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity, Form,
  Alert} from 'react-native';

  export default class SettingScreen extends Component{
    constructor(){
      super();
      this.state={
        emailId   : '',
        firstName : '',
        lastName  : '',
        address   : '',
        contact   : '',
      }
    }

    getData=()=>{
        var email = firebase.auth().currentUser.email;
        db.collection('users').where('email_id','==',email).get()
        .then(snapshot => {
          snapshot.forEach(doc => {
          var data = doc.data()
            this.setState({
              emailId   : data.email_id,
              firstName : data.first_name,
              lastName  : data.last_name,
              address   : data.address,
              contact   : data.contact,
              docId     : doc.id
            })
          });
        })
      }
      updateData=()=>{
        db.collection('users').doc(this.state.docId)
        .update({
          "first_name": this.state.firstName,
          "last_name" : this.state.lastName,
          "address"   : this.state.address,
          "contact"   : this.state.contact,
        })
    
        Alert.alert("You have updated your profile")
    
      }
    
      componentDidMount(){
        this.getData()
      }
    render(){
        return(
            <View>
     <TextInput
          style={styles.formTextInput}
          placeholder ={"first name"}
          maxLength ={12}
          onChangeText={(text)=>{
            this.setState({
              firstName: text
            })
          }}
        />
           <TextInput
          style={styles.formTextInput}
          placeholder ={"last Name"}
          maxLength ={12}
          onChangeText={(text)=>{
            this.setState({
              lastName: text
            })
          }}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder ={"contact"}
          maxLength ={14}
          keyboardType={'numeric'}
          onChangeText={(text)=>{
            this.setState({
              contact: text
            })
          }}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder ={"address"}
          multiline = {true}
          onChangeText={(text)=>{
            this.setState({
              address: text
            })
          }}
        />
        <TouchableOpacity
            style={styles.cancelButton}
            onPress={()=>{this.updateData}}
          >
          <Text style={{color:'orange'}}>Save</Text>
          </TouchableOpacity>
            </View>
        )
    }
  }  
  const styles = StyleSheet.create({
    container:{
     flex:1,
     backgroundColor:'#F8BE85',
     alignItems: 'center',
     justifyContent: 'center'
   },
  //  profileContainer:{
  //    flex:1,
  //    justifyContent:'center',
  //    alignItems:'center',
  //  },
   title :{
     fontSize:65,
     fontWeight:'300',
     paddingBottom:30,
     color : '#ff3d00'
   },
   loginBox:{
     width: 300,
     height: 40,
     borderBottomWidth: 1.5,
     borderColor : '#ff8a65',
     fontSize: 20,
     margin:10,
     paddingLeft:10
   },
   KeyboardAvoidingView:{
     flex:1,
     justifyContent:'center',
     alignItems:'center'
   },
   modalTitle :{
     justifyContent:'center',
     alignSelf:'center',
     fontSize:30,
     color:'#ff5722',
     margin:50
   },
   modalContainer:{
     flex:1,
     borderRadius:20,
     justifyContent:'center',
     alignItems:'center',
     backgroundColor:"#ffff",
     marginRight:30,
     marginLeft : 30,
     marginTop:80,
     marginBottom:80,
   },
   formTextInput:{
     width:"75%",
     height:35,
     alignSelf:'center',
     borderColor:'#ffab91',
     borderRadius:10,
     borderWidth:1,
     marginTop:20,
     padding:10
   },
   registerButton:{
     width:200,
     height:40,
     alignItems:'center',
     justifyContent:'center',
     borderWidth:1,
     borderRadius:10,
     marginTop:30
   },
   registerButtonText:{
     color:'#ff5722',
     fontSize:15,
     fontWeight:'bold'
   },
   cancelButton:{
     width:200,
     height:30,
     justifyContent:'center',
     alignItems:'center',
     marginTop:5,
   },
  
   button:{
     width:300,
     height:50,
     justifyContent:'center',
     alignItems:'center',
     borderRadius:25,
     backgroundColor:"#ff9800",
     shadowColor: "#000",
     shadowOffset: {
        width: 0,
        height: 8,
     },
     shadowOpacity: 0.30,
     shadowRadius: 10.32,
     elevation: 16,
     padding: 10
   },
   buttonText:{
     color:'#ffff',
     fontWeight:'200',
     fontSize:20
   }
  })
  
