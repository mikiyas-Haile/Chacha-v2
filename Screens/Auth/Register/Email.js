import React, { useContext, useEffect } from 'react'
import AuthInput from '../Input';
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react';

export default function RegisterEmail() {
    const nav = useNavigation();
    const [Value, setValue] = useState('');
    const onSubmit = () => {
        nav.push("RName")
    }
    
    const onHelpPressed = () => {
        nav.reset({
            index: 0,
            routes: [{ name: 'Landing' }],
        })
    }
    useEffect(() => {
        nav.setOptions({
            title: "Register",
        });
    }, []);
    
    return (
        <AuthInput
            onHelpPressed={onHelpPressed}
            onSubmit={onSubmit}
            setValue={setValue}
            Value={Value}
            inputType={'Email'}
            helpTxt={"Already have an account?"}
            placeholder='example@example.com'
            btnTxt='Next'
        />
    )
}