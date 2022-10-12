import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Item({ id, name }) {
    return (
        <View style={styles.container}>
            <Text style={{width:'5%', marginRight:'1%'}}>{id}</Text>
            <Text style={{width:'50%', textAlign:'center', marginRight:'20%'}}>{name}</Text>
            <Button title='Remove'></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: '1%'
    },
});
