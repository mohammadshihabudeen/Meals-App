import { FlatList, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = ({navigation}) => {
    const renderCategoryItem = (itemData) => {
        return (
            <CategoryGridTile title={itemData.item.title}
                color={itemData.item.color}
                onPress={()=>{
                    navigation.navigate("Meals Overview",{
                        categoryId : itemData.item.id,
                    })
                }}
            />
        )
    }
    return (
        <View>
            <FlatList data={CATEGORIES}
                key= {CATEGORIES.id}
                renderItem={renderCategoryItem}
                numColumns={2}
            />
        </View>
    )
}

export default CategoriesScreen