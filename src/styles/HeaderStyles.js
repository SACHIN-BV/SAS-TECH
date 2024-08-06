// headerStyles.js
import { StyleSheet } from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import colors from '../colors';

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.cardBackground,
    paddingVertical: responsiveScreenHeight(2),
    paddingHorizontal: responsiveScreenWidth(5),
  },
  title: {
    fontSize: responsiveScreenFontSize(2),
    color: colors.white,
    fontWeight: '500',
    marginBottom: responsiveScreenHeight(1),
    marginLeft: responsiveScreenWidth(1.3),
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: responsiveScreenHeight(1)
  },
  option: {
    flexDirection: 'row',
  },
  optionText: {
    color: colors.white,
    fontSize: responsiveScreenFontSize(1.6),
    marginRight: responsiveScreenWidth(2),
  },
  leftIcon: { 
    height: responsiveScreenHeight(2.8), 
    width: responsiveScreenWidth(2.5) 
  }
});

export default styles;
