import React, { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

SplashScreen.preventAutoHideAsync();

export default function LoadedFonts({ Child }) {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                await Font.loadAsync({
                    'Poppins-Bold': {
                        uri: require('./assets/fonts/Poppins/Poppins-Bold.ttf'),
                    },
                    'Poppins-Black': {
                        uri: require('./assets/fonts/Poppins/Poppins-Black.ttf'),
                    },
                    'Bold': {
                        uri: require('./assets/fonts/Poppins/Poppins-Bold.ttf'),
                    },
                    'Poppins-Regular': {
                        uri: require('./assets/fonts/Poppins/Poppins-Regular.ttf'),
                    },
                    'Poppins-Light': {
                        uri: require('./assets/fonts/Poppins/Poppins-Light.ttf'),
                    },
                    'Poppins-ExtraLight': {
                        uri: require('./assets/fonts/Poppins/Poppins-ExtraLight.ttf'),
                    },
                    'Poppins-MediumItalic': {
                        uri: require('./assets/fonts/Poppins/Poppins-MediumItalic.ttf'),
                    },
                    'Poppins-Medium': {
                        uri: require('./assets/fonts/Poppins/Poppins-Medium.ttf'),
                    },
                    'Inter-Regular': {
                        uri: require('./assets/fonts/Inter/Inter-Regular.ttf'),
                    },
                    'Inter-Medium': {
                        uri: require('./assets/fonts/Inter/Inter-Medium.ttf'),
                    },
                    'Inter-Black': {
                        uri: require('./assets/fonts/Inter/Inter-Black.ttf'),
                    },
                    'Inter-Bold': {
                        uri: require('./assets/fonts/Inter/Inter-Bold.ttf'),
                    },
                    'Inter-Light': {
                        uri: require('./assets/fonts/Inter/Inter-Light.ttf'),
                    },
                    'Inter-SemiBold': {
                        uri: require('./assets/fonts/Inter/Inter-SemiBold.ttf'),
                    },
                    'Cursive': {
                        uri: require('./assets/fonts/Rochester-Regular.ttf'),
                    },
                    'Caviar-Bold': {
                        uri: require('./assets/fonts/Caviar-Dreams/Caviar_Dreams_Bold.ttf'),
                    },
                    'Caviar-Bold-Italic': {
                        uri: require('./assets/fonts/Caviar-Dreams/CaviarDreams_BoldItalic.ttf'),
                    },
                    'Caviar-Italic': {
                        uri: require('./assets/fonts/Caviar-Dreams/CaviarDreams_Italic.ttf'),
                    },
                    'Caviar': {
                        uri: require('./assets/fonts/Caviar-Dreams/CaviarDreams.ttf'),
                    },
                    'NotoSerifEthiopic-Black': {
                        uri: require('./assets/fonts/NotoSerifEthiopic/NotoSerifEthiopic-Black.ttf')
                    },
                    'NotoSerifEthiopic-Medium': {
                        uri: require('./assets/fonts/NotoSerifEthiopic/NotoSerifEthiopic-Medium.ttf')
                    },
                    'NotoSerifEthiopic-Light': {
                        uri: require('./assets/fonts/NotoSerifEthiopic/NotoSerifEthiopic-Light.ttf')
                    },
                    'NotoSerifEthiopic-Regular': {
                        uri: require('./assets/fonts/NotoSerifEthiopic/NotoSerifEthiopic-Regular.ttf')
                    },
                });
                await new Promise(resolve => setTimeout(resolve, 2000));
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (
        <View
            style={{ flex: 1 }}
            onLayout={onLayoutRootView}>
            <Child />
        </View>
    );
}