import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'

let stock = createSlice({
    name: 'stock',
    initialState: [10, 11, 12]
})

let item = createSlice({
    name: 'item',
    initialState: [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ],
    reducers: {
        addItem(state, product) {
            let newItem = product.payload;
            let currentItem = state.find((item) => item.id === newItem.id);
            
            if (currentItem) {
                currentItem.count++;
                return;
            }

            state.push(newItem);
        },
        deleteItem(state, product) {
            state.splice(state.findIndex((item) => item.id === product.payload), 1);
        },
        addCount(state, idx) {
            state.find((item) => item.id === idx.payload).count++;
        },
        subtractCount(state, idx) {
            let item = state.find((item) => item.id === idx.payload);
            if (item.count === 1) {
                return;
            }
            item.count--;
        }
    }
})

export let { addItem, deleteItem, addCount, subtractCount } = item.actions;
export default configureStore({
  reducer: { 
    user: user.reducer,
    stock: stock.reducer,
    item: item.reducer
  }
}) 