import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ILLogo } from '../../assets'
import { Input, Link, Button, Gap } from '../../components'
import { colors } from '../../utils'

export default function Login() {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Log in and kickstart your consultation.</Text>
      <Input label="Email Address"/>
      <Gap height={24}/>
      <Input label="Password"/>
      <Gap height={24}/>
      <Link title="Forgot My Password" size={12}/>
      <Gap height={40} />
      <Button title="Log In"/>
      <Gap height={30} />
      <Link title="Create New Account" size={16} align='center'/>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: colors.white
  },
  title: {
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: colors.text.primary,
    marginTop: 40,
    marginBottom: 40,
  }
})