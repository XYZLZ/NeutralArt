import React from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = ({headerToken, propClass}) => {

    const navigate = useNavigate()
    const handleSubmit = async()=> {
        try {
            const req = await fetch('http://localhost:7000/api/v1/user/logout', {
                method:'POST',
                headers:{
                    'authorization':`Bearer ${headerToken}`,
                }
            });
            // const res = await req.json();

            if (req.status == 200){
                sessionStorage.removeItem('token');
                sessionStorage.removeItem('userId');
                sessionStorage.removeItem('user');
                sessionStorage.removeItem('userEmail');
                sessionStorage.removeItem('memberType');
                // navigate('/login');
                window.location.replace('http://localhost:5173/login');
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <a href='#'  className={propClass} onClick={handleSubmit}>Logout</a>   
    )
}

export default Logout