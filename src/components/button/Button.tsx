import React, { memo } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ButtonProps } from '../../components-schema';

const Button: React.FC<ButtonProps> = ({
    backgroundColor,
    text,
    onClick,
}) => {

    const styles = StyleSheet.create({
        button: {
            backgroundColor: backgroundColor || 'red',
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderRadius: 8,
        }
    });

    return (
        <TouchableOpacity disabled={!onClick} onPress={onClick} style={styles.button} >
            <Text>{ text }</Text>
        </TouchableOpacity>
    );
};

export default memo(Button);