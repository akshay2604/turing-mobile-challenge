import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { fonts } from '@themes';

// Modified: https://github.com/react-native-training/react-native-elements/blob/master/src/text/Text.js
const AppText = (props: any) => {
  const {
    style,
    fontSize,
    children,
    fontWeight,
    color,
    lineHeight,
    fontFamily,
    ...rest
  } = props;
  // let fFamily =  fontWeight === 'Bold' ? 'NotoSans-Bold' : "NotoSans-Regular"
  return (
    <Text
      style={[
        localStyles.text,
        style && style,
        fontWeight && { fontWeight },
        color && { color },
        fontFamily && { fontFamily },
        fontSize && { fontSize: fonts.fontSizeFormat(fontSize) },
        lineHeight && { lineHeight: fonts.fontSizeFormat(fontSize * 1.25) }
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

const localStyles = StyleSheet.create({
  text: {
    fontSize: fonts.fontSizeFormat(14),
    color: 'black',
    fontWeight: 'normal',
    fontFamily: fonts.fontType.regular
  }
});
export { AppText };
