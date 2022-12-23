import React, { useContext, useEffect } from 'react'
import AuthInput from '../Input';
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react';

export default function RegisterPhone() {
    const nav = useNavigation();
    const [Value, setValue] = useState('');
    const onSubmit = () => {
        console.log(Value)
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
            inputType={'Phone'}
            helpTxt={"Add your Phone Number"}
            placeholder='(---) --- ----'
            btnTxt='Next'
            underlined={false}
        />
    )
}