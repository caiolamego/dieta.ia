import { View, Text, Image, StyleSheet, Pressable, ScrollView} from 'react-native'
import { colors } from '@/constants/colors'
import { Link } from 'expo-router'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'
import { Header } from '@/components/header'

export function Create(){
    return(
        <View style={styles.container}>
            <Header
                step='Passo 2'
                title='Finalizando Dieta'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.background
    },
})