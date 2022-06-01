import React, { memo } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { ButtonStackProps } from '../../components-schema';
import { Button } from '../button';

const ButtonStack: React.FC<ButtonStackProps> = ({
    backgroundColor,
    text,
    buttons,
}) => {
    const styles = StyleSheet.create({
        buttonStack: {
            backgroundColor: backgroundColor || 'grey',
            padding: 16,
        },
        text: {
            marginBottom: 16,
            alignSelf: 'center',
            color: 'white',
            fontSize: 20,
        },
        space: {
            width: 16,
            height: 16,
        }
    });

    return (
        <View style={styles.buttonStack} >
            <Text style={styles.text} >{ text }</Text>
            {
                buttons.map((button) => {
                    return (
                        [<Button 
                            {...button}
                        />, <View style={styles.space} />]
                    );
                })
            }
        </View>
    );
};

export default memo(ButtonStack);