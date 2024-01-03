import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {api_url as baseUrl, headerToken} from '../../services'

const api = createApi({
    reducerPath: 'users',
    baseQuery:fetchBaseQuery({
        baseUrl,
        headers:{
            'authorization':`Bearer ${headerToken}`,
            'Content-Type': 'application/json'
        }
    }),
    endpoints:(build) => ({
        getUser: build.query({
            query: () => 'user/id'
        })
    })
});


export const {useGetUserQuery} = api;
export default api;