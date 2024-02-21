import React, { useEffect } from 'react';
import { Platform, View, Text, ToastAndroid, StyleSheet } from 'react-native';

const ToastMessage = ({ message, visible, setVisible }) => {
  useEffect(() => {
    if (visible) {
      if (Platform.OS === 'android') {
        ToastAndroid.show(message, ToastAndroid.SHORT);
      } else {
        const timeout = setTimeout(() => {
          setVisible(false);
        }, 200); // Hide toast after 2 seconds
        return () => clearTimeout(timeout);
      }
    }
  }, [ message]);

  return null;
};

export default ToastMessage;
