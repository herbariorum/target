import { Text, View } from "react-native";
import { styles } from "./styles";
import { colors } from "@/theme";
import Input, { CurrencyInputProps } from "react-native-currency-input";

type Props = CurrencyInputProps & {
    label: string
}
export function CurrencyInput({label, ...rest}: Props){
    return (
        <View style={styles.constainer}>
            <Text style={styles.label}>{label}</Text>
            <Input 
                style={styles.input} 
                placeholderTextColor={colors.gray[400]} 
                delimiter="."
                precision={2}
                minValue={0}
                {...rest}/>
        </View>
    )
}