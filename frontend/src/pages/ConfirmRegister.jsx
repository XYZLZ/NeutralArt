import React from 'react'
import {unconfirmed} from '../assets'
import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'

const ConfirmRegister = ({email}) => {
    const navigate = useNavigate();
  return (
    <>
        <div className='flex justify-center items-center min-h-screen bg-gray-50'>
            <div className='flex flex-col w-[600px] h-[600px] items-center justify-center bg-white rounded-lg shadow-lg flex-wrap gap-7'>
                <img src={unconfirmed} alt="unconfirmed_mail" className='w-[60%]' />
                <h1 className='text-gray-700 font-bold text-3xl'>Thank you for your registration</h1>
                <p className='text-gray-400 px-10 text-justify'>We have send you a confirmation email to <span className='text-gray-700 font-medium'>email@gmail.com</span>. Please confirm your email address to active your account.</p>
                <button type='button' className='landing__btn' onClick={()=> {
                    Swal.fire({
                        title:'Thank you for your registration',
                        html:`<p class='text-gray-400 text-justify'>We have send you a confirmation email to <span class='text-gray-700 font-medium'>email@gmail.com</span>. Please confirm your email address to active your account.</p>`,
                        imageUrl:`${unconfirmed}`,
                        imageWidth:'60%'
                    })
                }}>Continue</button>
            </div>
        </div>
    </>
  )
}

export default ConfirmRegister