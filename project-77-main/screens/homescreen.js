import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';
    import { ListItem } from 'react-native-elements'
    import firebase from 'firebase';
    import db from '../config'
    export default class ExchangeScreen extends Component{
        renderItem = ( {item, i} ) =>{
          return(
              <View>
       <ListItem
        key={i}
        title={item.itemname}
        subtitle={item.itemdescription}
        titleStyle={{ color: 'white', fontWeight: 'bold' }}
        rightElement={
            <TouchableOpacity style={styles.button}>
              <Text style={{color:'blue'}}>View</Text>
            </TouchableOpacity>
          }
      />
              </View>
            )
      }
    }