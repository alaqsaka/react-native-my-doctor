import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap, Header, Link } from '../../components'
import { ILNullPhoto, IconAddPhoto } from '../../assets'
import { colors, fonts } from '../../utils'

export default function UploadPhoto() {
  return (
    <View style={styles.page}>
        <Header title='Upload Photo' />
        <View style={styles.content}>
            <View style={styles.profile}>
                <View style={styles.avatarWrapper}>
                    <Image 
                        source={ILNullPhoto} 
                        style={styles.avatar} 
                    />
                    <IconAddPhoto style={styles.addPhoto}/>
                </View>
                <View>
                    <Text style={styles.name}>Al Aqsa Krisnaya</Text>
                    <Text style={styles.profession}>Software Engineer</Text>
                </View>
            </View>
           <View>
                <Button title="Upload and Continue" />
                <Gap height={30}/>
                <Link title="Skip for this" align="center" size={16}/>
           </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white,
    },
    avatar: {
        width: 110, 
        height: 110
    },
    avatarWrapper: {
        width: 130,
        height: 130, 
        borderWidth: 1, 
        borderColor: colors.border,
        borderRadius: 130 / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addPhoto: {
        position: 'absolute',
        bottom: 8,
        right: 6,
    },
    name: {
        fontSize: 24, 
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        textAlign: 'center'
    },
    profession: {
        fontSize: 18, 
        fontFamily: fonts.primary.normal,
        textAlign: 'center',
        color: colors.text.secondary
    },
    content: {
        paddingHorizontal: 40,
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: 40
    },
    profile: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
})