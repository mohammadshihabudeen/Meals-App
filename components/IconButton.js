import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
export default IconButton = ({ onPress, name, color }) => {
    return (
        <Pressable style={({pressed})=> {
            return pressed && {
              opacity:0.7 
            }}}>
            <Ionicons name={name} size={24} color={color} onPress={onPress} />
        </Pressable>

    )
}