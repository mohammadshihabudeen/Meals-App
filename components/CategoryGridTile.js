import { Pressable, View ,StyleSheet ,Text} from "react-native"
export default CategoryGridTile=({title,color ,onPress}) =>{
    return (
        <View style ={[styles.outerContainer, {backgroundColor: color}]} >
            <Pressable android_ripple={ {color: "#ccc"}} 
            style= {styles.button}
            onPress={onPress}
            >
                <View style={styles.innerContainer}>
                    <Text style= {styles.title}>
                        {title}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        outerContainer : {
            flex :1 ,
            margin: 16,
            height: 150 ,
            backgroundColor: "white" ,
            borderRadius: 15,
            elevation: 4,
            shadowColor: "black",
            shadowOpacity : 0.25,
            shadowOffset: {width: 0, height:2},
            shadowRadius: 8,
            overflow: "hidden"
        },
        button : {
            flex: 1
        },
        innerContainer :{
            flex: 1,
            padding: 16,
            justifyContent: "center",
            alignItems: "center"
        },
        title : {
            fontWeight: 'bold',
            fontSize: 18
        }
    

    }
);