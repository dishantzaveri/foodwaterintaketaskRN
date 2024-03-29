import * as React from 'react';
import Bottomnav from "./components/Bottomnav"
import {DefaultTheme, Provider as PaperProvider} from "react-native-paper";
import { StyleSheet, View,StatusBar } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import TopBar from "./components/TopBar";
import firebaseConfig from './firebaseConfig';

// const firebaseApp = firebase.initializeApp(firebaseConfig);

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}else {
    firebase.app(); // if already initialized, use that one
}

export default function App() {

    const theme = {
        ...DefaultTheme,
        dark: true,
        mode: 'adaptive',
        roundness: 15,
        colors: {
            ...DefaultTheme.colors,
            primary: '#2176FF',
            accent: '#33A1FD',
            surface: '#131A26',
            background: '#131A26',
            text: '#FFFFFF'
        },
    };

    return (
        <PaperProvider theme={theme}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <TopBar/>
                    <Bottomnav/>
                </View>
                <StatusBar style="auto" />
            </View>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    content: {
        flex: 10,
    }
});
