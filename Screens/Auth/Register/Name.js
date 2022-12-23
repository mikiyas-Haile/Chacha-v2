import React, { useContext, useEffect } from 'react'
import AuthInput from '../Input';
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react';

export default function RegisterName() {
    const nav = useNavigation();
    const [Value, setValue] = useState('');
    const onSubmit = () => {
        nav.push("RPhone")
    }
    
    const onHelpPressed = () => {
        console.log("Help Needed")
    }
    return (
        <AuthInput
            onHelpPressed={onHelpPressed}
            onSubmit={onSubmit}
            setValue={setValue}
            Value={Value}
            inputType={'Name'}
            helpTxt={"Add your First and Last Name"}
            placeholder='Mikiyas Haile'
            btnTxt='Next'
            underlined={false}
        />
    )
}