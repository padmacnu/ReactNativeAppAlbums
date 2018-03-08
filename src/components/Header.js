// Import libraries for making a registerComponent
import React from 'react';
import { Text, View } from 'react-native';
import s from '../styles/headerStyles';

// Make a component
const Header = (props) => {

  return (
    <View style={s.viewStyle}>
      <Text style={s.textStyle}>{props.headerText}</Text>
    </View>
  );
};

// Make the component available to other parts of the App
export default Header;
