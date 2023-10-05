import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import React from 'react';
import { ILHospitalBackground } from '../../assets';
import { colors, fonts } from '../../utils';
import { ListHospital } from '../../components';

export default function Hospitals() {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitalBackground} style={styles.background}>
        <Text style={styles.title}>Nearby Hospital</Text>
        <Text style={styles.desc}>Available 3</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital />
        <ListHospital />
        <ListHospital />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    height:     240,
    paddingTop: 40,
  },
  title: {
    fontSize:   20,
    fontFamily: fonts.primary[600],
    color:      colors.white,
    textAlign:  'center',
  },
  desc: {
    fontSize:   16,
    fontFamily: fonts.primary[400],
    color:      colors.white,
    marginTop:  6,
    textAlign:  'center',
  },
  page: {
    backgroundColor: colors.secondary, flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    borderRadius:    20,
    flex:            1,
    marginTop:       -20,
    paddingTop:      14,
  },
});
