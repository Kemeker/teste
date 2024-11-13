import React from 'react';
import Router from './app/router/router';
import { Provider as PaperProvider } from 'react-native-paper';
import 'react-native-gesture-handler';

export default function App() {
    return (
        <PaperProvider>
            <Router />
        </PaperProvider>
    );
}

