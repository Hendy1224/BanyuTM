import React from 'react';
import { TouchableOpacity, View,Text, StyleSheet, Image ,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const renderTransaksiItem = ({item}) =>(
    <ScrollView>
        <View style = {styles.itemBeritaContainer}>    
            <Image
                style = {styles.itemBg}
                source={require('../Assets/pantai-idola-banyutowo.png')}/>
                <View>
                    <Text style = {styles.beritaTitle}>{item.judul}</Text>
                    <Text style = {styles.beritaDescription}>{item.deskripsi}</Text>
                </View>
        </View>
    </ScrollView>
)

export default {renderTransaksiItem}

const styles =StyleSheet.create({
    itemBg:{                        
        width: 100,
        height: 70,
    },
    itemBeritaContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginLeft: 16,
    },
    beritaTitle:{
        fontSize: 14,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 100,
        marginRight: 16,
        marginLeft: 16
    },
    beritaDescription:{
        fontSize: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 100,
        marginRight: 16,
        marginLeft: 16
    },
})