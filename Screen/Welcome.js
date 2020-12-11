import * as React from 'react';
import {Button,Text, View, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import styles from '../Styles/StylesWelcome';

const Welcome = () => {
    const navigation = useNavigation();
    return (
        <View style = {styles.container}>
            <Image
                style = {styles.smile}
                source={require('../Assets/smile.png')}/>
            <Text style = {styles.registrasiBerhasil}>
                Registrasi Berhasil!
            </Text>
            <Text style = {styles.nikmati}>
                Nikmati kemudahan berwisata
            </Text>
            <View style = {styles.button}>
                <Button
                    color= '#29ADF8'
                    title = "Masuk"
                    onPress = {() =>
                        navigation.navigate('Login')
                    }            
                />
            </View>
        </View>
    )
}

export default Welcome;