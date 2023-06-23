import {api_url, headerToken} from './config'

const getConments = async(setConments, id, loading) => {
    try{
        loading ? loading(true) : undefined;
        const res = await fetch(`${api_url}conment`, {
            headers:{
                'authorization':`Bearer ${headerToken}`
            }
        });
    
        const data = await res.json();
    
        const cpp = data.data.filter(conment => conment.postId === id);
    
        setConments(cpp);
        // console.log(data);
        console.log('cpp', cpp);
    
        return data;
    }catch(error) {
        throw new Error('sonthing goes wrong' + error);
    }finally{
        loading ? loading(false) : undefined;
    }
}


const newConment = async(text, postId) => {
    try {
        const res = await fetch(`${api_url}conments`, {
            method:'POST', 
            headers:{
                'authorization':`Bearer ${headerToken}`,
                'Content-Type': 'application/json'
            },

            body:JSON.stringify({text, postId})
        })

        const conment = await res.json();

        return conment;



    } catch (error) {
        console.log(error)
    }
}



export {getConments, newConment}