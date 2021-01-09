import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Header from '../Header';
import OrderCard from '../OrderCard';

function Orders() {
    return (
        <ScrollView>
            <Header />
            <OrderCard />
        </ScrollView>
    );
}

const styles = StyleSheet.create({});

export default Orders;