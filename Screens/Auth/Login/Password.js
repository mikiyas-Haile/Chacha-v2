import { useState } from 'react';
import AuthInput from '../Input';

export default function AddPassword() {
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
            inputType={'Password'}
            helpTxt={"Forgot your password?"}
            placeholder='Type your password here'
            btnTxt='Login'
        />
    )
}