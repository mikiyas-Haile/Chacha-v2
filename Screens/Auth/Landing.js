import React, { useContext, useEffect } from 'react'
import { StyleSheet, TextInput, Dimensions, Pressable, Text, View, Image, ToastAndroid, ActivityIndicatorComponent, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../../AppContext';


export default function LandingPage(props) {
    const ctx = useContext(AppContext);
    const nav = useNavigation();
    useEffect(() => {
        nav.setOptions({
          title: '',
        });
      }, []);
    const register = () => {
        nav.navigate("REmail")
    }
    const login = () => {
        nav.navigate("Email" )
    }
    return (
        <View style={[styles.page, { backgroundColor: ctx.bgColor }]}>
            <View style={{ padding: 20, alignItems: 'center', marginTop: "auto" }}>
                <Image style={{ width: 100, height:210, tintColor: ctx.textColor }}  source={require('../../assets/logo/11.png')} />
            </View>
            <View>
                <Text style={[styles.btnText, { fontSize: 40, fontFamily: "Poppins-Bold", color: ctx.textColor }]}>Welcome to Chacha!</Text>
                <Text style={[styles.btnText, { fontSize: 30, fontFamily: "Poppins-Bold", color: ctx.textColor }]}>Please authenticate yourself</Text>
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity onPress={login} style={[styles.loginBtn, { backgroundColor: "#f32c55", borderColor: '#2c3e50' }]}>
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={register} style={[styles.loginBtn, { borderColor: '#2c3e50', backgroundColor:  ctx.bgColor }]}>
                    <Text style={[styles.btnText, { color: ctx.textColor }]}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    btnText: {
        fontFamily: "Poppins-Black",
        fontSize: 17,
        color: 'white'
    },
    loginBtn: {
        backgroundColor: 'black',
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: "#fe2c55"
    },
    bottom: {
        marginTop: "auto",
        margin: 10,
    },
    page: {
        flex: 1,
        backgroundColor: 'black',
    }
})