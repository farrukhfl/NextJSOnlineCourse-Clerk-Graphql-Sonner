import GlobalApi from '@/app/_utils/GlobalApi'
import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'sonner'

function CourseEnrollSection({courseInfo, isUserAlreadyEnrolled}) {
    const membership=false
    const router = useRouter()
    const {user} = useUser()

    const onEnrollCourse = () => {
        GlobalApi.enrollToCourse(courseInfo?.slug,user?.primaryEmailAddress.emailAddress).then((resp)=> {
            console.log(resp)



            if(resp){
                toast('User Enrolled successfull', {
                    description: 'User enrolled to this course'
                })

                router.push('/watch-course'+resp.CreateUserEnrollCourse.id)
            }
        })

    }
  return (
    <div className='p-3 text-center rounded-sm bg-primary'>
        <h2 className='text-[22px] font-bold text-white'>Enroll to the course</h2>
        
        {user&&(membership ||courseInfo.free)&&isUserAlreadyEnrolled ?<div className='gap-3 flex flex-col'>
        <h2 className='text-white font-light'>Enroll now to start Learnig and building the project</h2>
        <Button className="bg-white text-primary hover:bg-white
        hover:text-primary" onClick={()=>onEnrollCourse()}>Enroll now</Button>
        </div> : !user?

        <div className='gap-3 flex flex-col'>
        <h2 className='text-white font-light'>Enroll now to start Learnig and building the project</h2>
        <Link href={'/sign-in'}>
        <Button className="bg-white text-primary hover:bg-white
        hover:text-primary">Enroll now</Button>
        </Link>
        </div> 

        :!isUserAlreadyEnrolled &&
        <div className=' gap-3 flex flex-col'>
 <h2 className='text-white font-light'>Buy Membership and get access</h2>
        <Button className="bg-white text-primary hover:bg-white
        hover:text-primary">Buy now in just $2.99</Button>
        </div>}

    {isUserAlreadyEnrolled && <div className=' gap-3 flex flex-col'>
 <h2 className='text-white font-light'>Continue to learn your project</h2>
       <Link href={'/watch-course/'+isUserAlreadyEnrolled}>
        <Button className="bg-white text-primary hover:bg-white
        hover:text-primary">Continue</Button>
        </Link>
        </div>}


    </div>
  )
}

export default CourseEnrollSection
