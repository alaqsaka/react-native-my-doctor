import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IconBackDark } from '../../../assets'
import { Gap } from '../../atoms'
import { colors } from '../../../utils'

export default function Header() {
  return (
    <View style={styles.container}>
        <IconBackDark />
        <Text style={styles.text}>Header</Text>
        <Gap width={24}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
    paddingHorizontal: 16, 
        paddingVertical: 30, 
        backgroundColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        flex: 1,
        fontSize: 20,
        fontFamily: 'Nunito-Semibold',
        color: colors.text.primary
    }
})