import { Suspense } from "react"
import { colors } from "@/theme/colors";
import { Stack } from "expo-router";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold
} from "@expo-google-fonts/inter";

import { Loading } from "@/components/Loading";
import { SQLiteProvider } from "expo-sqlite";
import { migrage } from "@/database/migrate";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({Inter_400Regular, Inter_500Medium, Inter_700Bold})

  if (!fontsLoaded){
    return <Loading />
  }
  
  return (
    <Suspense fallback={<Loading />}>
      <SQLiteProvider 
        databaseName="target.db"
        onInit={migrage}
        useSuspense
      >
        <Stack 
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: colors.white}
          }}
        />
      </SQLiteProvider>
    </Suspense>
  )
}