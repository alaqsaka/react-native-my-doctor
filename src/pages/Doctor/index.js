import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { DoctorCategory, HomeProfile, NewsItem, RatedDoctor } from '../../components';
import { colors, fonts } from '../../utils';

export default function Doctor() {
  return (
    <View style={styles.page}>
      <HomeProfile />
      <Text style={styles.welcome}>Ready to consult with healthcare expert today?</Text>
      <DoctorCategory />
      <DoctorCategory />
      <DoctorCategory />
      <DoctorCategory />
      <Text>Top Rated Doctors</Text>
      <RatedDoctor />
      <RatedDoctor />
      <RatedDoctor />
      <Text>The Good News Gazette</Text>
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    paddingVertical:   30,
    paddingHorizontal: 16,
  },
  welcome: {
    fontSize:     20,
    fontFamily:   fonts.primary[600],
    color:        colors.text.primary,
    marginTop:    30,
    marginBottom: 16,
    maxWidth:     240,
  },
});
