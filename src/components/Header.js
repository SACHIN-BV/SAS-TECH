import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar, SafeAreaView } from 'react-native';
import styles from '../styles/HeaderStyles';
import colors from '../colors';
import labels from '../assets/lables';

const Header = () => {
    return (
        <SafeAreaView>
            <StatusBar backgroundColor={colors.primary} />
            <View style={styles.headerContainer}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={require('../assets/images/CaretLeft.png')} // Update with the path to your PNG image
                        style={styles.leftIcon}
                    />
                    <Text style={styles.title}>{labels.title}</Text>
                </View>
                <View style={styles.optionsContainer}>
                    {labels.options.map((option, index) => (
                        <TouchableOpacity key={index} style={styles.option}>
                            <Text style={[styles.optionText, index === 1 && { fontWeight: 'bold' }]}>
                                {option}
                            </Text>
                            {index < labels.options.length - 1 && <Text style={styles.optionText}>|</Text>}
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Header;
