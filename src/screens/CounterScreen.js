import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    //state === { counter: number }
    //action === { type: 'increase' || 'decrease', payload: 1 }
    switch(action.type) {
        case 'increase': return { ...state, counter: state.counter + action.payload };
        case 'decrease': return { ...state, counter: state.counter - action.payload };
        default: return state;
    }
};

const CounterScreen = () => {
    //const [ counter, setCounter ] = useState(0);
    //const [state, dispatch] = useReducer(reducer, {  red: 0, green: 0, blue: 0 });
    //const {counter} = state;
    const [state, dispatch] = useReducer(reducer, { counter: 0 });
    
    return <View>
        <Button title="Increase" onPress={() => { dispatch({ type: 'increase', payload: 1 }) }}/>
        <Button title="Decrease" onPress={() => { dispatch({ type: 'decrease', payload: 1 }) }}/>
        <Text>Current Count: {state.counter}</Text>
    </View>
};

const styles = StyleSheet.create({ });

export default CounterScreen;