'use client'
import { Lock, Play } from 'lucide-react'
import React from 'react'
import { useState } from 'react'  3:44

function CourseContentSection({courseInfo, isUserAlreadyEnrolled}) {
    const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div className='p-3 bg-white rounded-sm'>
      <h2>Contents</h2>
      {courseInfo.chapter.map((item,index)=> {
        <div>
            <h2 className={`p-2 text-[14px] flex justify-between 
            items-center m-2 hover:bg-gray-200 hover:text-gray-500
            border rounded-sm px-4 cursor-pointer ${activeIndex === index && 'bg-primary text-white'}`}>
                {index+1}. {item.name}
                {activeIndex === index ? 
                <Play height={4} width={4} /> :  
                <Lock width={4} height={4} />}
            </h2>
        </div>
      })}
    </div>
  )
}

export default CourseContentSection
