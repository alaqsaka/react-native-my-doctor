import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ILLogo } from '../../assets'
import { Button } from '../../components'

export default function GetStarted() {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text>Konsultasi dengan dokter jadi lebih mudah & fleksibel</Text>
      <Button />
      <Button />
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    padding: 40
  }
})