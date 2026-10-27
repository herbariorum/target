import { TransactionTypes } from "@/utils/TransactionTypes"
import { View } from "react-native"
import { styles } from "./styles"
import { Options } from "./option"
import { colors } from "@/theme"


type Props = {
    selected: TransactionTypes
    onChange: (type: TransactionTypes) => void
}

export function TransactionType({selected, onChange}: Props){
    return (
        <View style={styles.container}>
            <Options 
                icon="arrow-upward"
                title="Guardar"
                isSelected={selected === TransactionTypes.Input}
                selectedColor={colors.blue[500]}
                onPress={() => onChange(TransactionTypes.Input)}
            />
            <Options 
                icon="arrow-downward"
                title="Resgatar"
                isSelected={selected === TransactionTypes.Output}
                selectedColor={colors.red[400]}
                onPress={() => onChange(TransactionTypes.Output)}
            />
        </View>
    )
}