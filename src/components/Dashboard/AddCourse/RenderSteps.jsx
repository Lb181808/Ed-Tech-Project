import React from 'react'
import { useSelector } from 'react-redux'
import { FaCheck } from "react-icons/fa";
import CourseInformationForm from './CourseInformation/CourseInformationForm';

const RenderSteps = () => {

    const {step}=useSelector((state)=>state.course)

    const steps=[
        {
            id:1,
            title:"Course Information"
        },
        {
            id:2,
            title:"Course Buildar"
        },
        {
            id:3,
            title:"Publish"
        }
    ]
    return (
        <div className=''>
          <div className="relative mb-2 flex w-full justify-center w-5/6 w-[1050px]">
            {steps.map((item) => (
              <>
                <div
                  className="flex flex-col items-center "
                  key={item.id}
                >
                  <button
                    className={`grid cursor-default aspect-square w-[34px] place-items-center rounded-full border-[1px] ${
                      step === item.id
                        ? "border-yellow-50 bg-yellow-900 text-yellow-50"
                        : "border-richblack-700 bg-richblack-800 text-richblack-300"
                    } ${step > item.id && "bg-yellow-50 text-yellow-50"}} `}
                  >
                    {step > item.id ? (
                      <FaCheck className="font-bold text-richblack-900" />
                    ) : (
                      item.id
                    )}
                  </button>
                  
                </div>
                {item.id !== steps.length && (
                  <>
                    <div
                      className={`h-[calc(34px/2)] w-[33%]  border-dashed border-b-2 ${
                      step > item.id  ? "border-yellow-50" : "border-richblack-500"
                    } `}
                    ></div>
                  </>
                )}
              </>
            ))}
          </div>
    
          <div className="relative mb-16 flex select-none w-[1050px] `">
            {steps.map((item) => (
              <>
                <div
                  className="flex min-w-[130px] flex-col items-center gap-12 w-5/6 "
                  key={item.id}
                >
                  
                  <p
                    className={`text-sm ${
                      step >= item.id ? "text-richblack-5" : "text-richblack-500"
                    } font-semibold`}
                  >
                    {item.title}
                  </p>
                </div>
                
              </>
            ))}
          </div>
         {step==1 && <CourseInformationForm/>}
        </div>
      )
}

export default RenderSteps
