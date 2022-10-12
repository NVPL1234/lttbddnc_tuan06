import { useState, createContext, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import data from '../data';

var id = 0

export default function InputForm() {

    const [name, setName] = useState('')
    
    const add = ({ id, name }) => {
        console.log(id, name)
        data.push({ id, name })
        console.log(data);
    }

    return (
        <View style={styles.container}>
            <TextInput placeholder='Nhập môn học' style={{ width: '50%', marginRight: '1%', marginLeft: '20%' }} value={name} onChangeText={setName}></TextInput>
            <Button title='+' onPress={() => add({ id: id = id + 1, name: name })}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
});
