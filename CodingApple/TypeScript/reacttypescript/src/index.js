"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.incrementByAmount = exports.decrement = exports.increment = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var 초기값 = { count: 0, user: 'kim' };
var counterSlice = (0, toolkit_1.createSlice)({
    name: 'counter',
    initialState: 초기값,
    reducers: {
        increment: function (state) {
            state.count += 1;
        },
        decrement: function (state) {
            state.count -= 1;
        },
        incrementByAmount: function (state, action) {
            state.count += action.payload;
        }
    }
});
var store = (0, toolkit_1.configureStore)({
    reducer: {
        counter1: counterSlice.reducer
    }
});
//수정방법 만든거 export
exports.increment = (_a = counterSlice.actions, _a.increment), exports.decrement = _a.decrement, exports.incrementByAmount = _a.incrementByAmount;
