import * as React from 'react';
import {Text, View,FlatList,SafeAreaView,Image,TextInput,ScrollView} from 'react-native';
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import styles from '../Styles/StylesHomeScreen';
import stylesberita from '../Styles/StylesBerita';
import styleswisata from '../Styles/StylesWisata';
import BeritaDummy from './BeritaDummy';
import WisataDummy from './WisataDummy';
import Components from './Components';
import { SearchBar } from 'react-native-elements';

const HomeScreen = () => {
    const navigation = useNavigation();
    return(
        <SafeAreaView>
            <View style = {styles.viewImage}>
                <Image
                    style = {styles.banyu}
                    source={require('../Assets/banyu.png')}/>
            </View>
            <View style = {styles.viewCuaca}>
                <View style = {styles.viewCuaca1}>
                    <Text style = {styles.kota}><Image
                        style = {styles.pin}
                        source={require('../Assets/pin.png')}/> Desa Banyutowo, Pati</Text>
                    <Text style = {styles.textTanggal}>11/12/2020</Text>
                </View>
                <View style = {styles.viewCuaca1}>
                    <Text style = {styles.statusCuaca}>
                    <Image
                        style = {styles.pin}
                        source={require('../Assets/sunny-day.png')}/> Cuaca Cerah
                    </Text>
                    <Text style = {styles.statusSuhu}>
                    <Image
                        style = {styles.pin}
                        source={require('../Assets/thermometer.png')}/> Suhu 30°C 
                    </Text>
                </View>
            </View>
            <View style = {styles.viewItem}>
                <View style = {styles.item}>
                    <Image
                        style = {styles.itemIcon}
                        source={require('../Assets/calendar.png')}/>
                    <Text>Reservasi</Text>
                </View>

                <View style = {styles.item1}>
                    <Image
                        style = {styles.itemIcon}
                        source={require('../Assets/shopping-basket.png')}/>
                    <Text>Belanja</Text>
                </View>
            </View>
            <View style = {styles.viewItem1}>
                <View style = {styles.item2}>
                    <Image
                        style = {styles.itemIcon}
                        source={require('../Assets/map.png')}/>
                    <Text>Rute</Text>
                </View>
            </View>
        </SafeAreaView>
    ) 
}

const Berita = ()=> {
    const [searchQuery, setSearchQuery] = React.useState('');
    return(
        <SafeAreaView>
            <View style = {stylesberita.viewHeader}>
                <Text style = {{fontSize: 30, color: '#FFFFFF', marginLeft: 16,}}>
                    Berita
                </Text>
                <TextInput
                    style={stylesberita.search}
                    placeholder="Mencari . . . ."
                    setSearchQuery = {text => setSearchQuery(searchQuery)}
                    underlineColorAndroid="transparent"
                />
            </View>
            <Image
                style = {stylesberita.backgroundPantai}
                source={require('../Assets/pantai-idola-banyutowo.png')}/>
            <View style = {stylesberita.terkiniContainer}>
                <View style = {stylesberita.bgTerkini}>
                    <Text style = {{fontWeight: 'bold', fontSize:20,}}>Berita Terkini!</Text>
                </View>
            </View>
            <ScrollView>
                <FlatList
                    data = {BeritaDummy.dataBerita}
                    renderItem = {Components.beritaItem}                  
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const ObjekWisata = ()=>{
    return(
        <SafeAreaView>
            <View style = {styleswisata.viewHeader}>
                <Text style = {{fontSize: 30, color: '#FFFFFF', marginLeft: 16, paddingTop: 10}}>
                    Objek Wisata
                </Text>
            </View>
            <View style = {{marginTop: 10}}>
                <TextInput
                    style={styleswisata.search}
                    placeholder="Mencari . . . ."
                    setSearchQuery = {text => setSearchQuery(searchQuery)}
                    underlineColorAndroid="transparent"
                />
            </View>
            <ScrollView>
                <FlatList
                    data = {WisataDummy.dataWisata}
                    renderItem = {Components.wisataItem}                  
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const Akun = ()=>{
    return(
        <Text>
            Akun Screen
        </Text>
    )
}

export{HomeScreen, Berita, ObjekWisata, Akun}