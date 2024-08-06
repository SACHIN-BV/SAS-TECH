import { StyleSheet } from 'react-native';
import colors from '../colors';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";

const CustomCardStyles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: responsiveScreenHeight(2),
    opacity: 1,
    marginVertical: responsiveScreenHeight(1),
    backgroundColor: colors.cardBackground,
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: responsiveScreenFontSize(1.8),
    fontWeight: '500',
    color: colors.titleColor,
    marginBottom: 8,
  },
  description: {
    fontFamily: 'Poppins',
    fontSize: responsiveScreenFontSize(1.6),
    lineHeight: 22,
    textAlign: 'left',
    color: colors.descriptionColor,
  },
});

export default CustomCardStyles;
