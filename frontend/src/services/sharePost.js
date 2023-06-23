import {api_url, headerToken} from './config'

const sharePrivatePost = async (loading, id) => {
try {
    loading ? loading(true) : undefined;
    const share = await fetch(`${api_url}post/${id}`, {
        method:'PUT',
        headers:{
        "Content-Type": "application/json",
        'authorization':`Bearer ${headerToken}`
        },
        body:JSON.stringify({isGlobal:true})
    })

    const res = await share.json();

    return res;
    } catch (error) {
    console.log(error);
    }finally{
    loading ? loading(false) : undefined;
    }
}


export {sharePrivatePost};