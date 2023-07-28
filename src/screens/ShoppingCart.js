import React from "react";
import { Text,View,FlatList ,StyleSheet,Pressable} from "react-native";
import CartListItem from "../component/CartListItem";
import { useSelector } from "react-redux";
import { selectSubtotal } from "../../store/cartSlice";
import { selectDeliveryPrice } from "../../store/cartSlice";
import { selectTotal } from "../../store/cartSlice";
const shopping=()=>{
const subtotal=useSelector(selectSubtotal)
const delivery=useSelector(selectDeliveryPrice)
const total=useSelector(selectTotal)
   return(
<View style={styles.totalsContainer}>
                <View style={styles.row}>
                 <Text style={styles.text}>Subtotal</Text>
                 <Text style={styles.text}>{subtotal}US$</Text>
                </View>
                <View style={styles.row}>
                 <Text style={styles.text}>Delivery</Text>
                 <Text style={styles.text}>{delivery} US$</Text>
                </View><View style={styles.row}>
                 <Text style={styles.textBold}>Total</Text>
                 <Text style={styles.textBold}>{total} US$</Text>
                </View>
                </View>)
}

const ShoppingCart=()=>{
const cartItems=useSelector((state)=>state.cart.items)
    const addToCart=()=>{
        console.warn('Add to cart')
    }
    return(
        <>
        <FlatList data={cartItems} renderItem={({item})=>(
<CartListItem cartItem={item} />
        )}
        ListFooterComponent={shopping}
        />
        <Pressable onPress={addToCart} style={styles.button}>
        <Text style={styles.buttonText}>Check Out</Text>

       </Pressable>
        </>
    )
}
export default ShoppingCart;
const styles=StyleSheet.create({
    row:{
flexDirection:'row',
justifyContent:'space-between',
marginVertical:2,
},
totalsContainer:{
    margin:20,
    paddingTop:10,
    borderColor:'gainboro',
    borderTopWidth:1,
},text:{
    color:'gray',
    fontSize:16
},
textBold:{
    fontSize:16,
    fontWeight:'500'
},
button:{
    position:'absolute',
    backgroundColor:'black',
    bottom:30,
    width:'90%',
    alignSelf:'center',
    padding:20,
    borderRadius:100,
    alignItems:'center'
},
buttonText:{
    color:'white',
    fontSize:16,
    fontWeight:'500'
}
})