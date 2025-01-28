import { Link } from "expo-router"
import { Text, View } from "react-native"

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text className="font-bold mt-10 mb-20 font-rubik text-3xl">
                Welcome to RealEstate
            </Text>
        </View>
    )
}
