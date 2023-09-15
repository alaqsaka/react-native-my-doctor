import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ILGetStarted, ILLogo } from '../../assets'
import { Button, Gap } from '../../components'

export default function GetStarted() {
  return (
    <ImageBackground style={styles.page} source={ILGetStarted}>
      <View>
        <ILLogo />
        <Text style={styles.title}>Easier & more flexible doctor consultations</Text>
      </View>
      <View>
        <Button title="Get Started" />
        <Gap height={16}/>
        <Button title="Sign In" type="secondary" />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    flex: 1
  },
  title: {
    fontSize: 28,
    color: 'white',
    marginTop: 91,
    fontFamily: 'Nunito-SemiBold'
  }
})