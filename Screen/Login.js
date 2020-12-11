import * as React from 'react';
import {Button,Text, View, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import styles from '../Styles/StylesLogin';

const Login = () => {
    const navigation = useNavigation();
    const [email, onEmail] = React.useState('Email/No. Telepon');
    const [password, onPassword] = React.useState('Kata Sandi');

    return (
        <View style = {styles.container}>
            <Text style = {styles.textLogin}>
                Selamat Datang!
            </Text>
            <Text style = {styles.textLogin}>
                Senang melihatmu lagi.
            </Text>
            <Image
            style = {styles.smile}
            source={require('../Assets/smile.png')}/>
            <TextInput
                style = {styles.textInput}
                onEmail = {text => onEmail(email)}
                placeholder = {email}
            />
            <TextInput
                style = {styles.textInput}
                onPassword = {text => onPassword(password)}
                placeholder = {password}
            />
            <Text style = {styles.lupaKataSandi}>
                Lupa Kata Sandi?
            </Text>
            <View style = {styles.buttonMasuk}>
                <Button
                    color= '#29ADF8'
                    title = "Masuk"
                    onPress = {() =>
                        navigation.navigate('SuksesLogin')
                    }            
                />
            </View>
            <Text style = {styles.daftarText}>
                Belum memiliki akun? Daftar akun <Text style = {styles.daftarDisini} onPress = {()=> navigation.navigate('Register')}>disini</Text>
            </Text>
        </View>
    )
}

export default Login;