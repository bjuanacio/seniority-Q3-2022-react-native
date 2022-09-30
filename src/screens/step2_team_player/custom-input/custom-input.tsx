import { View } from "react-native"
import { BodyText } from "../../../components/atoms"
import { Input } from "../../../components/molecules";
import { styles } from './custom-input.styles'

interface CustomInputProps {
    name: string;
    value: any;
    setValue: any;
}

export const CustomInput = ({ name, value, setValue }: CustomInputProps) => {
    return (
        <View>
            <BodyText style={styles.bodyText}>
                {name}
            </BodyText>
            <Input
                onChangeText={setValue}
                value={value}
            />
        </View>
    )
}