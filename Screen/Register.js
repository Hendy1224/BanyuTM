import * as React from 'react';
import {Button,Text, View} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import styles from '../Styles/StylesRegister';

const Register = () => {
    const navigation = useNavigation();
    const [name, onName] = React.useState('Nama');
    const [email, onEmail] = React.useState('Email/No. Telepon');
    const [password, onPassword] = React.useState('*****************');
    const [passwordconfirm, onPasswordConfirm] = React.useState('*****************');

    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>
                Nama Lengkap
            </Text>
            <TextInput
                style = {styles.textInput}
                onName = {text => onName(name)}
                placeholder = {name}
            />
            <Text style = {styles.title}>
                Email/No. Telepon
            </Text>
            <TextInput 
                style = {styles.textInput}
                onEmail = {text => onEmail(email)}
                placeholder = {email}
            />
            <Text style = {styles.title}>
                Kata Sandi
            </Text>
            <TextInput
                style = {styles.textInput}
                onPassword = {text => onPassword(password)}
                placeholder = {password}
            />
            <Text style = {styles.title}>
                Konfirmasi Kata Sandi
            </Text>
            <TextInput
                style = {styles.textInput}
                onPasswordConfirm = {text => onPasswordConfirm(passwordconfirm)}
                placeholder = {passwordconfirm}
            />
            <View style = {styles.buttonDaftar}>
                <Button
                    color= '#29ADF8'
                    title = "Daftar"
                    onPress = {() =>
                        navigation.navigate('Welcome')
                    }            
                />
            </View>
        </View>
    )
}

export default Register;