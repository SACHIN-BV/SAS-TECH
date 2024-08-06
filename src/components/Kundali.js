import React from 'react';
import { View, Text, Image } from 'react-native';
import KundaliStyles from '../styles/KundaliStyles';

const Kundali = () => {
  return (
    <View style={KundaliStyles.container}>
      <View style={KundaliStyles.overlayContainer}>
        <Image
          source={require('../assets/images/Kundli.png')} // Update with the path to your PNG image
          style={KundaliStyles.image}
        />
      </View>
      <View style={KundaliStyles.overlayContainer}>
        <View style={[KundaliStyles.textContainer, KundaliStyles.textMarginTop(4)]}>
          <Text style={KundaliStyles.text(30.6)}>8</Text>
          <Text style={KundaliStyles.text(28)}>8</Text>
        </View>
        <View style={[KundaliStyles.textContainer, KundaliStyles.textMarginTop(0.7)]}>
          <Text style={KundaliStyles.text(30.6)}>Ma</Text>
          <Text style={KundaliStyles.text(40)}>Mo</Text>
        </View>
        <View style={[KundaliStyles.textContainer, KundaliStyles.textMarginTop(3)]}>
          <Text style={KundaliStyles.text(10.6)}>9</Text>
          <Text style={KundaliStyles.text(32)}>7</Text>
          <Text style={KundaliStyles.text(32)}>5</Text>
        </View>
        <View style={[KundaliStyles.textContainer, KundaliStyles.textMarginTop(0.2)]}>
          <Text style={KundaliStyles.text(14.6)}>Ke</Text>
          <Text style={KundaliStyles.text(20)}>7</Text>
          <Text style={KundaliStyles.text(10)}>5</Text>
          <Text style={KundaliStyles.text(22)}>Ra</Text>
        </View>
        <View style={[KundaliStyles.textContainer, KundaliStyles.textMarginTop(0.7)]}>
          <Text style={KundaliStyles.text(10.6)}>9</Text>
          <Text style={KundaliStyles.text(32)}>7</Text>
          <Text style={KundaliStyles.text(32)}>5</Text>
        </View>
        <View style={[KundaliStyles.textContainer, KundaliStyles.textMarginTop(2)]}>
          <Text style={KundaliStyles.text(8.6)}>Me</Text>
          <Text style={KundaliStyles.text(30)}>Ve Sa</Text>
        </View>
        <View style={[KundaliStyles.textContainer, KundaliStyles.textMarginTop(1.2)]}>
          <Text style={KundaliStyles.text(15.6)}>Su Ju</Text>
          <Text style={KundaliStyles.text(12.6)}>8</Text>
          <Text style={KundaliStyles.text(16)}>8</Text>
        </View>
      </View>
    </View>
  );
};

export default Kundali;
