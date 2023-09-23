import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { DummyDoctor1, IconStar } from '../../../assets';
import { colors, fonts } from '../../../utils';

export default function RatedDoctor() {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor1} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>Alexa Rachel</Text>
        <Text style={styles.category}>Pediatrician</Text>
      </View>
      <View style={styles.rate}>
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width:        50,
    height:       50,
    borderRadius: 50 / 2,
    marginRight:  12,
  },
  container: {
    flexDirection:  'row',
    justifyContent: 'space-between',
    paddingBottom:  16,
  },
  rate: {
    flexDirection: 'row',
  },
  name: {
    fontSize:   16,
    fontFamily: fonts.primary[600],
    color:      colors.text.primary,
  },
  category: {
    fontSize:   14,
    fontFamily: fonts.primary.normal,
    color:      colors.text.secondary,
    marginTop:  2,
  },
  profile: {
    flex: 1,
  },
});
