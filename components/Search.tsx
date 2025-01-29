import {
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native"
import React, { useState } from "react"
import {
    router,
    useLocalSearchParams,
    usePathname
} from "expo-router"
import icons from "@/constants/icons"
import { useDebouncedCallback } from "use-debounce"

const Search = () => {
    const path = usePathname()
    const params = useLocalSearchParams<{
        query?: string
    }>()

    const [search, setSearch] = useState(params.query || "")

    {
        /** suppose a user is searching House, they will start typing
        H then o, then u ... , so in order to fix this we will wait for 
        sometime in order to modify the search  */
    }
    const debouncedSearch = useDebouncedCallback(
        (text: string) => router.setParams({ query: text }), 500
    )

    const handleSearch = (text: string) => {
        setSearch(text)
        debouncedSearch(text)
    }
    return (
        <View className="flex flex-row items-center justify-between w-full px-6 rounded-lg bg-accent-100 border border-primary-100 mt-5 py-1">
            <View className="flex-1 flex flex-row items-center justify-start z-50 gap-2">
                <Image
                    source={icons.search}
                    className="size-5"
                />
                <TextInput
                    value={search}
                    onChangeText={handleSearch}
                    placeholder="Search..."
                    className="text-xl font-rubik text-black-300"
                />
            </View>

            <TouchableOpacity>
                <Image
                    source={icons.filter}
                    className="size-5"
                />
            </TouchableOpacity>
        </View>
    )
}

export default Search
