

import { Button } from "@/components/Button";
import { HomeHeader } from "@/components/HomeHeader";
import { List } from "@/components/List";
import { Target } from "@/components/Target";
import { router } from "expo-router";
import { StatusBar, View } from "react-native";

const summary = {
    total: "R$ 2.600,00",
    input: { label: "Entradas", value: "R$ 6,184.90" },
    output: { label: "Saídas", value: "-R$ 883.65" },
}

const targets = [{
    id: "1",
    name: "Comprar uma cadeira ergonômica",
    percentage: "75%",
    current: "R$ 900,00",
    target: "R$ 1.200,00",
},
{
    id: "2",
    name: "Comprar notebook",
    percentage: "65%",
    current: "R$ 1000,00",
    target: "R$ 1.700,00",
},
{
    id: "3",
    name: "Fazer uma viagem para o Rio de Janeiro",
    percentage: "75%",
    current: "R$ 1.200,00",
    target: "R$ 5.200,00",
}
]


export default function Index() {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle={"light-content"} />
            
            <HomeHeader data={summary} />
            
            <List 
                data={targets} 
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <Target data={item} onPress={() => router.navigate(`/in-progress/${item.id}`)}/>}
                title="Metas"
                emptyMessage="Nenhuma meta. Toque em nova meta para adicionar"
                containerStyle={{ paddingHorizontal: 24}}
            />
            <View style={{padding: 24, paddingBottom: 32}}>
            <Button title="Nova meta" onPress={() => router.navigate("/target")} />
            </View>
        </View>
    )
}


