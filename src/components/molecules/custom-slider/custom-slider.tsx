import { View } from "react-native"
import { Slider } from "@miblanchard/react-native-slider"
import { BodyText } from "../../atoms"
import { styles } from './custom-slider.styles'

interface CustomSliderProps {
    name: string;
    value: any,
    setValue: any;
}
export const CustomSlider = ({ name, value, setValue }: CustomSliderProps) => {
    return (
        <View>
            <BodyText style={styles.bodyText}>
                {name}
            </BodyText>
            <View style={styles.slider}>
                <Slider
                    containerStyle={styles.sliderContainer}
                    value={value}
                    onValueChange={value => setValue(value)}
                    minimumValue={0}
                    maximumValue={100} />
                <BodyText style={styles.sliderValueContainer}>{parseInt(value, 10)}</BodyText>
            </View>
        </View>
    )
}