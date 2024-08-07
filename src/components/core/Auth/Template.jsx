import React from 'react'
import { FcGoogle } from "react-icons/fc";
import frameImg from "../../../assets/Images/frame.png"
import LoginForm from './LoginForm';
import SignupForm from "../Auth/SignUpForm"

const Template = ({title,description1,description2,image,formType}) => {
  return (
    <div className='mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap--0 md:gap-x-12'>
      <div className='mx-auto w-11/12 max-2-[450px] md:mx-0'>
        <h1 className='text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5'>{title}</h1>

        <p className='mt-4 text-[1.125rem] leading-[1.625rem]'>
            <span className="text-richblack-100">{description1}</span>{" "}
            <span className="font-edu-sa font-bold italic text-blue-100">{description2}</span>
        </p>

        {formType==="signup"?<SignupForm/>:<LoginForm/>}
      </div>
      <div className='relative mx-auto w-11/12 max-2-[450px]'>
        <img width={558} height={504} loading='lazy' src={frameImg} />
        <img className="absolute -top-4 right-4 z-10" src={image} width={558} height={504} loading='lazy'  />
      </div>
    </div>
  )
}

export default Template
