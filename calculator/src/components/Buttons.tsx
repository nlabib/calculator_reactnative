import { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { ThemeContext } from "./src/context/ThemContext";
import {styles} from "../styles/GlobalStyles";

interface ButtonProps {
    onPress: () => void;
    tite: string;
    isBlue?: boolean;
    isGray?: boolean;
    isLight?: boolean;
}

export default function Button({ onPress, tite, isBlue, isGray }: ButtonProps) {
    const theme = useContext(ThemeContext);
    return (
        <TouchableOpacity
           style={
            isBlue 
            ? styles.btnBlue 
            : isGray 
            ? styles.btnGrey 
            :theme === "light"
            ? styles.btnLight
            : styles.btnDark
           }
           onPress={onPress}>
            
                    {tite}
        
            </TouchableOpacity>
    );
}