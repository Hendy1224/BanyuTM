import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: "center"
    },
    textInput:{
        marginTop: 27,
        backgroundColor: '#E5E5E5',  
        width: 280,
        height: 48, 
        paddingLeft: 24,
        paddingTop: 10, 
        paddingBottom: 10,
    },
    textLogin:{
        fontSize:16,
        marginTop:11, 
    }, 
    smile:{
        width: 120,
        height: 120,
        marginTop: 25,
    },
    lupaKataSandi:{
        marginTop: 15,
        fontSize: 16,
        color: '#29ADF8',
        marginLeft: 150,
    },
    buttonMasuk: {
        marginTop: 10,
        padding: 10,
        width: 150,
        height: 40,
        fontSize: 18,
    },
    daftarText: {
        marginTop: 20,
        fontSize: 14,
    },
    daftarDisini:{
        color: '#29ADF8',
    },  
})

export default styles;