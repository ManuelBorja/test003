import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Button,
  KeyboardAvoidingView

} from 'react-native';
import LoginForm from './LoginForm';
import {Actions} from 'react-native-router-flux';

export default class Login extends React.Component {
  render() {
  	return(
     <KeyboardAvoidingView behavior="padding" style={styles.container}>
	     <View style={styles.logoContainer}>
		     <Image style={styles.logo}
		      source={require('../img/logosolo.png')}
		     />
		     <Text style={styles.titulo}>
		     Tablero de Control
		     </Text>
	     </View>

	     <View style={styles.formContainer}>
	     	<LoginForm/>
	     </View>

     </KeyboardAvoidingView>
     );
  }
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		backgroundColor:'#fff',
	},
	logoContainer: {
		alignItems: 'center',
		flexGrow:1,
		justifyContent:'center',
	},
	logo: {
		width:100,
		height:80
	},
	titulo: {
		marginTop:10,
		textAlign:'center',
	},
});
