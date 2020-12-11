import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import {HomeScreen, Berita, ObjekWisata, Akun} from './HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const MenuBottom = createBottomTabNavigator();

const MenuHome = () => {
    return (
        <MenuBottom.Navigator>
            <MenuBottom.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel:'Home',
                    // tabBarIcon: ()=>(<Icon name="rocket" size={30} color="#900" />)
                }}
            />
            <MenuBottom.Screen
                name="Berita"
                component={Berita}
                options={{
                    tabBarLabel:'Berita',
                    // tabBarIcon: ({size,color})=>(<MaterialIcon name="swap-vertical" size={size} color={color}/>)
                }}
            />
            <MenuBottom.Screen
                name="ObjekWisata"
                component={ObjekWisata}
                options={{
                    tabBarLabel:'Objek Wisata',
                    // tabBarIcon: ({size,color})=>(<MaterialIcon name="planet-outline" size={size} color={color}/>)
                }}
            />
            <MenuBottom.Screen
                name="Akun"
                component={Akun}
                options={{
                    tabBarLabel:'Akun',
                    // tabBarIcon: ({size,color})=>(<MaterialIcon name="planet-outline" size={size} color={color}/>)
                }}
            />
        </MenuBottom.Navigator>
    )
}
export default MenuHome;