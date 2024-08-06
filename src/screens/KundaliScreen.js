import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    Text,
    View
} from 'react-native';
import Table from '../components/Table';
import { headers, data, kundaliGeneral } from '../assets/data';
import CustomCard from '../components/CustomCard';
import LinearGradient from 'react-native-linear-gradient';
import Kundali from '../components/Kundali';
import styles from '../styles/kundaliScreenStyles';
import colors from '../colors';
import labels from '../assets/lables';

function KundaliScreen() {
    return (
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
            >
                <View style={styles.container}>
                    <Kundali />
                   
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>{labels.sectionTitlePlanets}</Text>
                        <View style={styles.headerContainer}>
                            <View style={styles.headerBox}>
                                <Text style={styles.headerText}>{labels.headerSign}</Text>
                            </View>
                            <LinearGradient
                                colors={[colors.gradiantPrimary, colors.gradiantSecondary]} // Use gradient colors
                                style={styles.headerBox}
                            >
                                <Text style={[styles.headerText, { color: colors.text }]}>{labels.headerNakshatra}</Text>
                            </LinearGradient>
                        </View>
                    </View>
                    <View>
                        <Table headers={headers} data={data} />
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>{labels.sectionTitleUnderstandingKundli}</Text>
                        <View style={styles.headerContainer}>
                            <LinearGradient
                                colors={[colors.gradiantPrimary, colors.gradiantSecondary]} // Use gradient colors
                                style={styles.headerBox}
                            >
                                <Text style={[styles.headerText, { color: colors.text }]}>{labels.headerGeneral}</Text>
                            </LinearGradient>
                            <View style={styles.headerBox}>
                                <Text style={styles.headerText}>{labels.headerPlanetary}</Text>
                            </View>
                            <View style={styles.headerBox}>
                                <Text style={styles.headerText}>{labels.headerYoga}</Text>
                            </View>
                        </View>
                    </View>
                    {kundaliGeneral.map((item, index) => (
                        <CustomCard
                            key={index}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </View>
            </ScrollView>
    );
}

export default KundaliScreen;
