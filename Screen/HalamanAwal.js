import * as React from 'react';
import {Button,Text, View, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import styles from '../Styles/StylesHalamanAwal';

const HalamanAwal = () => {
    const navigation = useNavigation();
    return (
        <View style = {styles.container}>
            <Image
                style = {styles.logo}
                source={require('../Assets/smile.png')}/>
            <Image
                style = {styles.banyu}
                source={require('../Assets/banyu.png')}/>
            <View style = {styles.button}>
                <Button
                    color= '#29ADF8'
                    title = "Masuk"
                    onPress = {() =>
                        navigation.navigate('Login')
                    }            
                />
                <Button
                    color= '#29ADF8'
                    title = "Daftar"
                    onPress = {() =>
                        navigation.navigate('Register')
                    }            
                />
            </View>
            <Image
                style = {styles.water}
                source={require('../Assets/water1.png')}/>
        </View>
    )
}

export default HalamanAwal;