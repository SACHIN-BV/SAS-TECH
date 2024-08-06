import { StyleSheet } from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import colors from '../colors';

const TableStyles = StyleSheet.create({
  table: {
    borderWidth: responsiveScreenWidth(0.1),
    borderColor: 'gray',
    margin: responsiveScreenHeight(1),
    borderRadius: 20,
  },
  headerRow: {
    height: responsiveScreenHeight(3.8),
    flexDirection: 'row',
    borderBottomWidth: responsiveScreenWidth(0.1),
    borderBottomColor: 'darkgray',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  headerCell: {
    flex: 1,
    padding: responsiveScreenWidth(0.1),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.headerBackground,
    borderRightWidth: 0.5,
    borderRightColor: 'darkgray',
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: responsiveScreenFontSize(1.2),
  },
  row: {
    flexDirection: 'row',
    backgroundColor: colors.cardBackground, 
  },
  cell: {
    flex: 1,
    padding: responsiveScreenWidth(1.2),
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: 'lightgray',
  },
  cellText: {
    color: 'white',
    fontSize: responsiveScreenFontSize(1.4),
  },
});

export default TableStyles;
