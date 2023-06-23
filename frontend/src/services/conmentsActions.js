import {api_url, headerToken} from './config'

const delConment = async(_id) => {
    try {
        const res = await fetch(`${api_url}conment/${_id}`, {
            method:'DELETE',
            headers:{
                'authorization':`Bearer ${headerToken}`
            }
        })
        
        const data = await res.json();
        console.log(data);

        if (data.success) {
            return true;
        }

        return false;
    } catch (error) {
        console.log(error);
    }
}

const replyConment = async(_id, text, loading) => {
    // return console.log(text);
    try {
        loading ? loading(true) : undefined;
        const res = await fetch(`${api_url}conment/reply/${_id}`, {
            method:'POST', 
            headers:{
                'authorization':`Bearer ${headerToken}`,
                'Content-Type': 'application/json'
            },

            body:JSON.stringify({text})
        })

        const data = await res.json();
        console.log(data);

        if (data.success) {
            return true
        }

        return false;
    } catch (error) {
        throw new Error('sonthing goes wrong' + error);
    } finally{
        loading ? loading(false) : undefined;
    }
}

const editConment = async(_id, text, loading) => {
    try {
        loading ? loading(true) : undefined;
        const res = await fetch(`${api_url}conment/${_id}`, {
            method:'PUT', 
            headers:{
                'authorization':`Bearer ${headerToken}`,
                'Content-Type': 'application/json'
            },

            body:JSON.stringify({text})
        })

        const data = await res.json();

        if (data.success) {
            return true
        }

        return false;
    } catch (error) {
        throw new Error('sonthing goes wrong' + error);
    } finally {
        loading ? loading(false) : undefined;
    }
}

export {delConment, editConment, replyConment};