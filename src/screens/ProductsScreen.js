import React from "react";
import {StyleSheet,View, FlatList,Image,Pressable } from "react-native";
//import products from "../data/products";
import Navigation from "../navigation";
import { useSelector,useDispatch } from "react-redux";
import { productSlice } from "../../store/productSlice";
import { useGetProductsQuery } from "../../store/apiSlice";

const ProductsScreen=({navigation})=>{
    const products=useSelector(state=>state.products.products)
    const dispatch=useDispatch()
    const {data,isLoading,error}=useGetProductsQuery();
console.log(error)
    return(
        <FlatList 
      data={products}
      renderItem={({item})=>(
        <Pressable onPress={()=>{
            dispatch(productSlice.actions.setSelectedProduct(item.id))
            navigation.navigate('Products Details')}}
        style={styles.itemContainer}>
      <Image source={{uri:item.image}} style={styles.image} />

          </Pressable>

      )}
      numColumns={2}
      />
    )
}
export default ProductsScreen
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image:{
      width:'100%',
      aspectRatio:1,
    },
    itemContainer:{
      width:'50%',
      padding:1,
    }
  });