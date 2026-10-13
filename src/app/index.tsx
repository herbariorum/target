

import { HomeHeader } from "@/components/HomeHeader";
import { View } from "react-native";

const summary = {
    total: "R$ 2.600,00",
    input: {label: "Entradas", value:"R$ 6,184.90"},
    output: {label: "Saídas", value:"-R$ 883.65"},
}

export default function Index(){
    return (
        <View style={{flex: 1}}>
            <HomeHeader data={summary}/>
        </View>
    )
}


