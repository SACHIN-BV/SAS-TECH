import React from 'react';
import { SafeAreaView } from 'react-native';
import KundaliScreen from './screens/KundaliScreen';
import Background from './components/Background';
import Header from './components/Header';
import styles from './styles/kundaliScreenStyles';

function App() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <Background />
            <Header />
            <KundaliScreen />
        </SafeAreaView>
    )
}

export default App;