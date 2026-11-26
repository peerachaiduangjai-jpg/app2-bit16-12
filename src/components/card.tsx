import { Image, StyleSheet, View, Text } from 'react-native'

type CardProps = {
    id: number,
    name: string,
    image: string,
    price: number,
    category: string,
    stock: number
}
export default function Card({id,name,image,price,category,stock}: CardProps){
    return (
        <View style={cardstyle.box}>
            <Image source={{ uri:image }} style={cardstyle.Image} />
            <Text>{name}</Text>
            <Text>{price}</Text>
            <Text>{category}</Text>
            <Text>{stock}</Text>
            <Text style={{backgroundColor:"green", padding:10, borderRadius:16, width:55, textAlign:"center"}}>สั่งซื้อ</Text>
            
        </View>
    )
}

const cardstyle=StyleSheet.create({
  box:{
    backgroundColor:"gray",
    margin:20,
    padding:10,
    borderRadius:10
},
Image: {
    width: 100,
    height: 100,
    borderRadius:10
}
})