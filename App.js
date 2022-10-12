import { StyleSheet, Text, View, FlatList } from 'react-native';
import InputForm from './component/InputForm';
import Item from './component/Item';
import data from './data.js'

export default function App() {

  const renderItem = ({item}) => (
    <Item id= {item.id} name= {item.name}></Item>
  )

  return (
    <View style={styles.container}>
      <InputForm></InputForm>
      <View style={{marginTop:'1%', marginLeft:'1%'}}>
        <FlatList data={data} renderItem={renderItem} extraData={data}></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '5%',
    padding: '1%'
  },
});
