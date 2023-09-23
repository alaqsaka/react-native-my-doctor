import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { DoctorCategory, HomeProfile, NewsItem, RatedDoctor } from '../../components';

export default function Doctor() {
  return (
    <View>
      <HomeProfile />
      <Text>Ready to consult with your preferred healthcare expert today?</Text>
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

const styles = StyleSheet.create({});
