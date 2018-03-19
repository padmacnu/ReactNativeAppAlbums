import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
   <View style={styles.container}>
     <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
     </TouchableOpacity>
   </View>
  )
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    fontSize: 16,
    fontWeight: '600'
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    paddingTop: 10,
    paddingBottom: 10
  }
}

export default Button;
