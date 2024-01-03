import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {api_url as baseUrl, headerToken} from '../../services'

const api = createApi({
    reducerPath: 'posts',
    baseQuery:fetchBaseQuery({
        baseUrl,
        headers:{
            'authorization':`Bearer ${headerToken}`,
            'Content-Type': 'application/json'
        }
    }),
    endpoints:(build) => ({
        getPost: build.query({
            query: () => 'post/id'
        }),
        getAllPost: build.query({
            query: () => 'post'
        })
    })
});


export const {useGetPostQuery, useGetAllPostQuery} = api;
export default api;