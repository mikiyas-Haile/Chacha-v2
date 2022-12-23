import AddPassword from './Login/Password';
import AddEmail from './Login/Email';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppContext } from '../../AppContext';
import { useContext } from 'react';
import LandingPage from './Landing';
import RegisterEmail from './Register/Email';
import RegisterName from './Register/Name';
import RegisterPhone from './Register/Phone';

const Stack = createNativeStackNavigator();

export default function Auth() {
    const ctx = useContext(AppContext)
    return (
        <Stack.Navigator screenOptions={{
                    headerStyle: {
                        backgroundColor: ctx.bgColor,
                    },
                    headerTitleStyle: {
                        fontFamily: 'Poppins-Bold',
                        color: ctx.textColor,
                        borderBottomWidth: 1,
                        borderBottomColor: ctx.textColor
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: ctx.textColor,
                }} initialRouteName='Landing'>
          <Stack.Screen options={{ headerShown: false }} name="Landing" component={LandingPage} />
          <Stack.Screen name="Email" component={AddEmail} />
          <Stack.Screen name="Password" component={AddPassword} />
          {/* Registration */}
          <Stack.Screen name="REmail" component={RegisterEmail} />
          <Stack.Screen name="RName" component={RegisterName} />
          <Stack.Screen name="RPhone" component={RegisterPhone} />
        </Stack.Navigator>
    )
}