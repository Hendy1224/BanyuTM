import React from 'react';
import { TouchableOpacity, View,Text, StyleSheet, Image ,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import styleswisata from '../Styles/StylesWisata';

const beritaItem = ({item}) =>(
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

const wisataItem = ({item}) =>(
    <ScrollView>
        <View style = {styles.borderWisata}>
            <View style = {styles.itemWisataContainers}>
                <View style = {styles.itemWisataContainer}>
                    <Image
                        style = {styles.itemBgWisata}
                        source={require('../Assets/pantai-idola-banyutowo.png')}/>
                    <View style = {styles.wisataItem}>
                        <Text style = {styles.wisataTitle}>{item.judul}</Text>
                        <Text style = {styles.wisataJenis}>Jenis Wisata: {item.jenis_wisata}</Text>
                        <Text style = {styles.wisataHarga}>Harga: Rp.{item.harga}</Text>
                        <Text style = {styles.wisataJam}>Jam Buka: {item.jam}</Text>
                    </View>
                    
                </View>
                <View style = {styles.arrow}>
                    <Image
                        style = {{width: 24,
                            height: 24,}}
                        source={require('../Assets/right-arrow.png')}/>
                </View>
            </View>
        </View>
    </ScrollView>
)

export default {beritaItem,wisataItem}

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
    itemWisataContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    itemWisataContainers: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemBgWisata:{                        
        width: 110,
        height: 80,
        borderRadius: 10,
        marginLeft: 8,
        marginTop: 5,
    },
    borderWisata: {
        borderWidth: 4,
        width: 325,
        height: 100,
        borderColor: '#C4C4C4',
        borderRadius: 10,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 20,
    },
    wisataTitle: {
        fontSize: 20,
    },
    wisataJenis: {
        fontSize: 12, 
    },
    wisataHarga: {
        fontSize: 12, 
    },
    wisataJam: {
        fontSize: 12, 
    },
    wisataItem:{
        marginLeft: 8,
    },
    arrow:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 16
    },
})