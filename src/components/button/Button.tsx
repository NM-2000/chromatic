import React, { memo } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ButtonProps } from '../../components-schema';

const Button: React.FC<ButtonProps> = ({
    backgroundColor,
    text,
    click,
}) => {
    const styles = StyleSheet.create({
        button: {
            backgroundColor: backgroundColor || 'grey',
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderRadius: 8,
            alignItems: 'center'
        }
    });

    return (
        <TouchableOpacity disabled={!click} onPress={click} style={styles.button} >
            <Text>{ text }</Text>
        </TouchableOpacity>
    );
};

export default memo(Button);