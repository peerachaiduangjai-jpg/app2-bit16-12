import { FlatList, Text, View, } from 'react-native';

import products from '../products.json';

import Card from '@/components/card';

export default function App(){
  return(
    <View style={{backgroundColor:"#42434b"}}>
    <Text style={{textAlign:"center"}}>รายการสินค้า</Text>

      <FlatList
      //ข้อมูลที่จะเรนเดอร์
      data={products}

      //คีย์หลัก
      keyExtractor={(item) => item.id.toString()}

      //component ที่จะแสดงผล
      renderItem={({item}) =>(
        <Card
        id={item.id}
        name={item.name}
        image={item.image}
        price={item.price}
        stock={item.stock}
        category={item.category}
        />
      )}
      />
    </View>
  )
}