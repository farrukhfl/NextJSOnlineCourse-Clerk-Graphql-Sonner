'use client'

import GlobalApi from "@/app/_utils/GlobalApi"
import Image from "next/image"
import { useEffect, useState } from "react"

function SideBanner() {
  const[sideBannerList, setSideBannerList] = useState()
    useEffect(()=> {
        getSideBanner()  
    },[])

    const getSideBanner = GlobalApi.getSideBanner().then((resp) => {
      setSideBannerList(resp.sideBanners)
    })

  return (
    <div>
        {sideBannerList.map((item,index)=>(
          <div key={index}>
            <Image className="rounded-xl" onClick={()=> window.open(item?.url)} src={item.banner.url} alt="banner"width={500} height={300}/>
          </div>
        ))}
    </div>
  )
}

export default SideBanner
