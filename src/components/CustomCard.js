import React from 'react';
import { Text, View } from 'react-native';
import CustomCardStyles from '../styles/CustomCardStyle';

const CustomCard = ({ title, description }) => {
    return (
        <View style={CustomCardStyles.card}>
            <Text style={CustomCardStyles.title}>{title}</Text>
            <Text style={CustomCardStyles.description}>{description}</Text>
        </View>
    );
};

export default CustomCard;
