import { StyleSheet } from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import colors from '../colors';

const KundaliStyles = StyleSheet.create({
  container: {
    marginTop: responsiveScreenHeight(26),
    marginBottom: responsiveScreenHeight(2),
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'transparent', // Ensure background is transparent
  },
  image: {
    width: responsiveScreenWidth(90.6), // Adjust size as needed
    height: responsiveScreenHeight(27), // Adjust size as needed
    alignSelf: 'center',
  },
  overlayContainer: {
    width: responsiveScreenWidth(90), // Adjust size as needed
    height: responsiveScreenHeight(25.2),
    marginTop: -responsiveScreenHeight(25.2),
  },
  textContainer: {
    borderColor: '#fff',
    borderWidth: 0,
    flexDirection: 'row',
  },
  textMarginTop: (value) => ({
    marginTop: responsiveScreenHeight(value),
  }),
  text: (value) => ({
    fontSize: responsiveScreenFontSize(1.3),
    color: colors.white,
    marginLeft: responsiveScreenWidth(value),
  }),
});

export default KundaliStyles;
