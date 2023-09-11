import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from './assets';
import React from 'react';

export default function Splash() {
  return (
    <View
      style={styles.page}>
      <ILLogo />
      <Text
        style={styles.title}>
        My Doctor
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '600',
    color: '#112340',
  }
});
