import * as React from 'react';
import Button from './Button';
import { View } from 'react-native';
import { ThemeContext } from './ThemeContext';
import { myColors } from '../styles/colors';

export default function MyKeyboard() {
    const [firstNumber, setFirstNumber] = React.useState('');
    const [secondNumber, setSecondNumber] = React.useState('');
    const [operation, setOperation] = React.useState('');
    const [result, setResult] = React.useState<Number | null > (null);
    
    
    const handleNumberPress =(buttonValue: string) => {
        if (firstNumber.length < 10){
            setFirstNumber(firstNumber + buttonValue);
        }
    };

    const handleOperationPress =(buttonValue: string) => {
        if (operation.length < 10){
            setOperation(buttonValue);
            setSecondNumber(firstNumber)
            setFirstNumber("");
        }
    }
    const clear = () => {
        setFirstNumber("");
        setSecondNumber("");
        setOperation("");
        setResult(null);
    };

    const getResult = () => {
        switch(operation) {
            case "+":
                setResult(parseInt((Number(firstNumber) + Number(secondNumber)));
                break;
            case "-":
                setResult(Number(firstNumber) - Number(secondNumber));
                break;
            case "*":
                setResult(Number(firstNumber) * Number(secondNumber));
                break;
            case "/":
                setResult(Number(firstNumber) / Number(secondNumber));
                break;
            default:
                clear();
                setResult(0);
                break;    
        }
    }

    result(
        

    )
}
