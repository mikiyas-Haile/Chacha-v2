import React, { useContext, useEffect } from 'react'
import AuthInput from '../Input';
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react';

export default function AddEmail() {
    const nav = useNavigation();
    const [Value, setValue] = useState('');
    const onSubmit = () => {
        nav.push("Password")
    }
    
    const onHelpPressed = () => {
        nav.reset({
            index: 0,
            routes: [{ name: 'Landing' }],
        })
    }
    return (
        <AuthInput
            onHelpPressed={onHelpPressed}
            onSubmit={onSubmit}
            setValue={setValue}
            Value={Value}
            inputType={'Email'}
            helpTxt={"Don't have an account?"}
            placeholder='example@example.com'
            btnTxt='Next'
        />
    )
}