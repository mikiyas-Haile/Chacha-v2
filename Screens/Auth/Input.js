import { Text, TextInput, TouchableOpacity, View, Pressable } from 'react-native'
import { useContext, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../../AppContext';

export default function AuthInput({ underlined, inputType, placeholder, helpTxt, btnTxt, setValue, Value, onSubmit, onHelpPressed }) {
    const ctx = useContext(AppContext);
    const isPassword = inputType === 'Password' ? true : false
    const nav = useNavigation();
    const isEmail = inputType === 'Email' ? true : false
    const isName = inputType === 'Name' ? true : false
    useEffect(() => {
        nav.setOptions({
            title: inputType,
        });
    }, []);
    return (
        <View style={{
            flex: 1,
            backgroundColor: ctx.bgColor,
            padding: 20,
            paddingTop: 20,
        }}>
            <Text style={{
                color: ctx.textColor,
                fontFamily: 'Poppins-Bold',
                fontSize: 20
            }}>Enter your {inputType}</Text>
            <TextInput
                value={Value}
                onChangeText={setValue}
                selectionColor={ctx.PrimaryColor}
                secureTextEntry={isPassword}
                keyboardType={isPassword ? 'default' : isEmail ? 'email-address' : isName ? 'number-pad' : 'number-pad'}
                placeholderTextColor={ctx.textColor + '90'}
                style={{
                    color: ctx.textColor,
                    fontFamily: 'Poppins-Regular',
                    fontSize: 15,
                    backgroundColor: ctx.textColor + '10',
                    borderRadius: 5,
                    padding: 10,
                    marginTop: 5,
                    marginBottom: 15,
                }} placeholder={placeholder} />
            <Pressable onPress={onHelpPressed}>
                <Text style={{
                    color: ctx.textColor + '80',
                    textDecorationLine: underlined === false ? 'none' : 'underline',
                    marginBottom: 15,
                    marginLeft: 10
                }}>
                    {helpTxt}
                </Text>
            </Pressable>
            <TouchableOpacity onPress={onSubmit} style={{
                backgroundColor: ctx.PrimaryColor,
                padding: 10,
                borderRadius: 30,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Text style={{
                    color: 'white',
                    fontFamily: 'Poppins-Black',
                    fontSize: 15
                }}>{btnTxt}</Text>
            </TouchableOpacity>
        </View>
    )
}