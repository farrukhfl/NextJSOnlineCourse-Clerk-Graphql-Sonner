'use client'

import { useEffect, useState } from "react"
import CourseVideoDescription from "./_components/CourseVideoDescription"
import GlobalApi from "@/app/_utils/GlobalApi"
import CourseEnrollSection from "./_components/CourseEnrollSection"
import CourseContentSection from "./_components/CourseContentSection"
import { useUser } from "@clerk/nextjs"

function CoursePreview({params}) {
   const[courseInfo, setCourseInfo] = useState()
   const [isUserAlreadyEnrolled, setIsUserAlreadyEnrolled] = useState(false)
   const {user} = useUser()
    useEffect(()=> {
    params && getCourseInfoById()
    },[params])

    const getCourseInfoById = () => {
        GlobalApi.getCourseById(params.courseId).then((resp)=> {
            setCourseInfo(resp?.courseId)
           resp.couseList&&checkUserEnrolledToCourse()
        })
    }
    const checkUserEnrolledToCourse = () => {
GlobalApi.checkUserEnrolledToCourse(courseInfo.slug,user.primaryEmailAddress.emailAddress).then((resp)=> {
if(resp?.useEnrollCourses?.id){
  setIsUserAlreadyEnrolled(true)
}
})
    }

  return courseInfo&&(
    <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-3">
        <div className="col-span-2 bg-white p-3">
    <CourseVideoDescription courseInfo={courseInfo} />
        </div>

        <div>
          <CourseEnrollSection courseInfo={courseInfo} isUserAlreadyEnrolled={isUserAlreadyEnrolled}/>
          <CourseContentSection courseInfo={courseInfo} isUserAlreadyEnrolled={isUserAlreadyEnrolled}/>
        </div>
      
    </div>
  )
}

export default CoursePreview
