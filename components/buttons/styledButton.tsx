import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import { buttonStyles } from './goBackStyles';
import { StyledButtonProps } from '../../types/styledButtonType';



function StyledButton({ href, text }: StyledButtonProps) {
    return (
        <Link href={href} style={buttonStyles.backLink}>
            <Text>{text}</Text>
        </Link>
    );
}
export default StyledButton

const styles = StyleSheet.create({})