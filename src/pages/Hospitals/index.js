import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import React from 'react';
import { DummyHospital1, DummyHospital2, DummyHospital3, ILHospitalBackground } from '../../assets';
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
        <ListHospital type="Rumah Sakit" name="Citra Bunga Merdeka 1" address="Jln. Surya Sejahtera 1" image={DummyHospital1} />
        <ListHospital type="Rumah Sakit Anak" name="Citra Bunga Merdeka 2" address="Jln. Surya Sejahtera 2" image={DummyHospital2} />
        <ListHospital type="Rumah Sakit Jiwa" name="Citra Bunga Merdeka 3" address="Jln. Surya Sejahtera 3" image={DummyHospital3} />
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
