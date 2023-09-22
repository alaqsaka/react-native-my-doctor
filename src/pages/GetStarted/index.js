import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ILGetStarted, ILLogo } from '../../assets';
import { Button, Gap } from '../../components';
import { colors, fonts } from '../../utils';

export default function GetStarted({ navigation }) {
  return (
    <ImageBackground style={styles.page} source={ILGetStarted}>
      <View>
        <ILLogo />
        <Text style={styles.title}>Easier & more flexible doctor consultations</Text>
      </View>
      <View>
        <Button title="Get Started" onPress={() => navigation.navigate('Register')} />
        <Gap height={16} />
        <Button title="Sign In" type="secondary" onPress={() => navigation.replace('Login')} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  page: {
    padding:         40,
    justifyContent:  'space-between',
    backgroundColor: colors.white,
    flex:            1,
  },
  title: {
    fontSize:   28,
    color:      colors.white,
    marginTop:  91,
    fontFamily: fonts.primary[600],
  },
});
