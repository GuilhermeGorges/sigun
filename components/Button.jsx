import { TouchableOpacity, Text } from "react-native";
import { styles } from "../styles/styles";

export default function Button(props) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Text style={styles.button}>{props.children}</Text>
        </TouchableOpacity>
    )
}
