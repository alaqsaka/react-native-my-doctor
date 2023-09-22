import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { IconBackDark } from '../../../assets';

export default function IconOnly({ onPress, icon }) {
  function Icon() {
    if (icon === 'back-dark') {
      return <IconBackDark />;
    }
    if (icon === 'back-light') {
      return <IconBackDark />;
    }
    return <IconBackDark />;
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
