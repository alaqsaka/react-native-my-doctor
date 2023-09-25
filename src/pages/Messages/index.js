import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ListDoctor } from '../../components';
import { colors } from '../../utils';

export default function Messages() {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text>Messages Page</Text>
        <ListDoctor />
        <ListDoctor />
        <ListDoctor />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex:            1,
  },
  content: {},
});
