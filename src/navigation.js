import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack=createNativeStackNavigator()
import { Pressable,Text } from "react-native";
import ShoppingCart from "./screens/ShoppingCart";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import ProductsScreen from "./screens/ProductsScreen";
import { FontAwesome5 } from "@expo/vector-icons";
import { selecteNumberOfItems } from "../store/cartSlice";
import { useSelector } from "react-redux";
const Navigation=()=>{
    const numberofItem=useSelector(selecteNumberOfItems)
    return (
<NavigationContainer>
    <Stack.Navigator screenOptions={{contentStyle:{backgroundColor:'white'}}}>
        <Stack.Screen 
        name="Products"
        component={ProductsScreen}
        options={({navigation})=>(
            
            {headerRight:()=><Pressable onPress={()=>navigation.navigate('Cart')} style={{flexDirection:'row'}}><FontAwesome5
        name='shopping-cart'
        size={18}
        color='gray'

        />
        <Text style={{marginLeft:5,fontWeight:'500'}}>{numberofItem}</Text>
        </Pressable>})}
        />
        <Stack.Screen 
        name="Products Details"
        component={ProductDetailsScreen}
        options={{presentation:'modal'}}
        />
        <Stack.Screen 
        name="Cart"
        component={ShoppingCart}
        />
    </Stack.Navigator>
</NavigationContainer>
    );
}
export default Navigation;