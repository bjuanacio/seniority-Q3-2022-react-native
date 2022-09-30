import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';

interface ListType {
    items: any[];
    renderItem: any;
}

export const List = ({ items, renderItem }: ListType) => {

    return (
        <FlatList data={items} renderItem={renderItem} />
    )
}
