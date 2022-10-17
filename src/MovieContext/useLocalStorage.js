import React from "react";

function getSavedValues(itemName, initialState) {
    return JSON.parse(localStorage.getItem(itemName)) || initialState;
}


function useLocalStorage (itemName, initialState) {
    const [items, setItems] = React.useState(() => getSavedValues(itemName, initialState))

    const saveItems = (newItem) => {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItems(newItem);
    }

    return [items, saveItems];
}

export {useLocalStorage};