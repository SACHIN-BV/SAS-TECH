import { StyleSheet } from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import colors from '../colors';

const BackgroundStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary, // You can move this color to colors.js if needed
  },
  dot: {
    position: 'absolute',
    borderRadius: responsiveScreenFontSize(10),
  },
  gradientCircle: {
    width: responsiveScreenWidth(600),
    height: responsiveScreenHeight(600),
    borderRadius: responsiveScreenFontSize(1000), // Makes the view a circle
  },
  image: {
    width: responsiveScreenWidth(190.6), // Adjust size as needed
    height: responsiveScreenHeight(95.2), // Adjust size as needed
    alignSelf: 'center'
  },
});

export default BackgroundStyles;
