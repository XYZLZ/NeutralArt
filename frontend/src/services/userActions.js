import {api_url, headerToken} from '.'

const deleteUser = async() => {
    try {
        const res = await fetch(`${api_url}user/id`, {
            method:'DELETE',
            headers:{
                'authorization':`Bearer ${headerToken}`
            }
        })

        const data = await res.json();

        if (data.success) {
            return true
        }

        return false;
    } catch (error) {
        console.log(error);
    }
}

const memberTypeCheck = async () => {
    try {
        const req = await fetch(`${api_url}user/id`, {
            headers:{
                'authorization':`Bearer ${headerToken}`
            }
        });
        const res = await req.json();
        // console.log(res.data.memberType);
        return res.data.memberType; 
    } catch (error) {
        console.log(error);
    }
}

export {deleteUser, memberTypeCheck}