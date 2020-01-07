import React, { useState } from 'react'
import {
	View,
	KeyboardAvoidingView,
	Platform,
	Image,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity
} from 'react-native'

import logo from '../assets/logo.png'

const Login = () => {
	const [email, setEmail] = useState('')
	const [techs, setTechs] = useState('')

	const handleSubmit = async () => {
		console.log(email, techs)
	}

	return (
		<KeyboardAvoidingView behavior='padding' style={styles.container}>
			<Image source={logo} />

			<View style={styles.form}>
				<Text style={styles.label}>SEU E-MAIL *</Text>
				<TextInput
					style={styles.input}
					placeholder='Seu email'
					placeholderTextColor='#999'
					keyboardType='email-address'
					autoCapitalize='words'
					autoCorrect={false}
					value={email}
					onChangeText={setEmail}
				/>

				<Text style={styles.label}>TECNOLOGIAS *</Text>
				<TextInput
					style={styles.input}
					placeholder='Tecnologias de interesse'
					placeholderTextColor='#999'
					autoCapitalize='none'
					autoCorrect={false}
					value={techs}
					onChangeText={setTechs}
				/>

				<TouchableOpacity onPress={handleSubmit} style={styles.button}>
					<Text style={styles.buttonText}>Encontrar spots</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	form: {
		alignSelf: 'stretch',
		paddingHorizontal: 30,
		marginTop: 30
	},
	label: {
		fontWeight: 'bold',
		color: '#444',
		marginBottom: 8,
		textTransform: 'uppercase'
	},
	input: {
		borderWidth: 1,
		borderColor: '#ddd',
		paddingHorizontal: 20,
		fontSize: 16,
		color: '#444',
		height: 44,
		marginBottom: 20,
		borderRadius: 2
	},
	button: {
		height: 42,
		backgroundColor: '#f05a5b',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 2
	},
	buttonText: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 16
	}
})

export default Login
