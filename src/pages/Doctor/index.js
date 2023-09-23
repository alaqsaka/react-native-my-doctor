import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { DoctorCategory, Gap, HomeProfile, NewsItem, RatedDoctor } from '../../components';
import { colors, fonts } from '../../utils';

export default function Doctor() {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={30} />
          <HomeProfile />
          <Text style={styles.welcome}>Ready to consult with healthcare expert today?</Text>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={16} />
                <DoctorCategory />
                <DoctorCategory />
                <DoctorCategory />
                <DoctorCategory />
                <Gap width={6} />
              </View>
            </ScrollView>
          </View>
          <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
          <RatedDoctor />
          <RatedDoctor />
          <RatedDoctor />
          <Text style={styles.sectionLabel}>The Good News Gazette</Text>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex:            1,
  },
  content: {
    backgroundColor:         colors.white,
    paddingHorizontal:       16,
    flex:                    1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius:  20,
  },
  welcome: {
    fontSize:     20,
    fontFamily:   fonts.primary[600],
    color:        colors.text.primary,
    marginTop:    30,
    marginBottom: 16,
    maxWidth:     240,
  },
  category: {
    flexDirection: 'row',
  },
  wrapperScroll: {
    marginHorizontal: -16,
  },
  sectionLabel: {
    fontSize:     16,
    fontFamily:   fonts.primary[600],
    color:        colors.text.primary,
    marginTop:    30,
    marginBottom: 16,
  },
});
