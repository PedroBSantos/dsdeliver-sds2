import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fetchOrders } from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';

function Orders() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const handlerOnPress = (order: Order) => {
        navigation.navigate("OrderDetails", { order });
    }
    const fetchData = () => {
        setIsLoading(true)
        fetchOrders()
            .then(response => setOrders(response.data))
            .catch(() => Alert.alert("Houve um erro ao buscar os pedidos!"))
            .finally(() => setIsLoading(false));
    }
    useEffect(() => {
        if (isFocused) {
            fetchData();
        }
    }, [isFocused])
    return (
        <ScrollView>
            <Header />
            {isLoading ? <Text style={styles.text}>Buscando pedidos...</Text> : orders.map(order => (
                <TouchableWithoutFeedback key={order.id} onPress={() => {
                    handlerOnPress(order)
                }}>
                    <OrderCard order={order} />
                </TouchableWithoutFeedback>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 19,
        letterSpacing: -0.24,
        color: '#9E9E9E',
        fontFamily: 'OpenSans_400Regular',
    }
});

export default Orders;