import * as React from 'react';
import {Button,Text, View, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import styles from '../Styles/StylesSuksesLogin';

const SuksesLogin = () => {
    const navigation = useNavigation();
    return (
        <View style = {styles.container}>
            <Image
                style = {styles.smile}
                source={require('../Assets/smile.png')}/>
            <Text style = {styles.suksesMasuk}>
                Sukses Masuk!
            </Text>
            <View style = {styles.button}>
                <Button
                    color= '#29ADF8'
                    title = "Selesai"
                    onPress = {() =>
                        navigation.navigate('Home')
                    }            
                />
            </View>
        </View>
    )
}

export default SuksesLogin;