import { StyleSheet } from "react-native";
import { myColors } from "./colors";


export const styles = StyleSheet.create({
    btnBlue: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColors.blue,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
    },
    btnDark:{
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColors.btnDark,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8
    },
    btnLight:{
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColors.btnGrey,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
    },
    btnGrey:{
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColors.btnGrey,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
    },
    smallTextDark:{
        fontSize:32,
        color: myColors.black,
    },
    row:{   
        maxWidth: '100%',
        maxHeight: "row",
    },
    viewButtom:{
        position: 'absolute',
        bottom:50,
    },
    screenFirstNumber:{
        fontSize: 96,
        color: myColors.gray,
        fontWeight:'200',
        alignSelf: 'flex-end',

    },
    screenSecondNumber:{
        fontSize: 96,
        color: myColors.gray,
        fontWeight:'200',
        alignSelf: 'flex-end',
    }

})