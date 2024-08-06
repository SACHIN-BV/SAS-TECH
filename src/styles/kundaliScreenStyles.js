import { StyleSheet } from 'react-native';
import colors from '../colors';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
  } from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.primary
    },
    scrollView: {
        backgroundColor: 'transparent',
    },
    container: {
        background: 'transparent',
        paddingHorizontal: responsiveScreenWidth(2),
        paddingVertical: responsiveScreenHeight(1),
    },
    greeting: {
        color: colors.text,
        fontSize: responsiveScreenFontSize(1.8),
        marginBottom: responsiveScreenHeight(1),
    },
    section: {
        marginBottom: responsiveScreenHeight(1),
    },
    sectionTitle: {
        color: colors.white,
        fontSize: responsiveScreenFontSize(2),
        marginVertical: responsiveScreenHeight(1),
        marginLeft: responsiveScreenWidth(2.5),
        fontWeight: '500'
    },
    headerContainer: {
        flexDirection: 'row',
    },
    headerBox: {
        borderColor: colors.white,
        borderWidth: responsiveScreenWidth(0.3),
        borderRadius: responsiveScreenWidth(5),
        height: responsiveScreenHeight(3.5),
        paddingHorizontal: responsiveScreenWidth(3),
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: responsiveScreenWidth(2.5),
    },
    headerText: {
        color: colors.white,
        fontSize: responsiveScreenFontSize(1.6),
    },
    rectangle: {
        width: responsiveScreenWidth(38),
        height: responsiveScreenHeight(24),
        borderColor: colors.white,
        borderWidth: responsiveScreenWidth(0.2),
    },
});

export default styles;
