import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Button,
  TouchableOpacity,
  StatusBar
} from 'react-native';

import { CheckBox } from 'react-native-elements';

import { Actions } from 'react-native-router-flux';

export default class LoginForm extends React.Component {

  handlePress() {
	Actions.resumen();
  };

  render() {
  	return(
     <View style={styles.container}>
        <StatusBar barstyle="light-content" />

		<TextInput
		 placeholder = "Usuario"
		 placeholderTextColor = 'rgba(0,0,0,0.2)'
		 returnKeyType="next"
		 onSubmitEditing = {() => this.passwordInput.focus() }
		 autoCapitalize = "none"
		 autoCorrect = {false}
		 style = {styles.input}
		/>
		
		<TextInput
		 placeholder = "Contraseña"
		 placeholderTextColor = 'rgba(0,0,0,0.2)'
		 returnKeyType="go"
		 secureTextEntry
		 style = {styles.input}
		 ref={(input) => this.passwordInput = input}
		/>

		<TouchableOpacity 
		  onPress={() => this.handlePress()} 
		  style={styles.buttonContainer}>
		  <Text style={styles.buttonText}>Login</Text>
		</TouchableOpacity>

		<CheckBox
		  title='Actualizar'
		  checked={false}
		/>

     </View>
     );
  }
}

const styles = StyleSheet.create({
	container: {
		padding:20,
	},
	input: {
		height:40,
		backgroundColor:'rgba(0,175,175,0.2)',
		marginBottom:20,
		color:'#000',
		paddingHorizontal:10,
	},
	buttonContainer:{
		paddingVertical:15,
		backgroundColor:'#2980b9',
	},
	buttonText:{
		textAlign:'center',
		color:'#000',
		fontWeight:'700'
	}
});
