import {configureStore} from '@reduxjs/toolkit'
import {userApi} from './api'


const store = configureStore({
    reducer:{
        [userApi.default.reducerPath]: userApi.default.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.default.middleware)
})


export default store