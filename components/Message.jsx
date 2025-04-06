import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Message = ({role, content}) => {
  return (
    <div className='flext flex-col items-center w-full max-w-3xl text-sm '>
       <div className={`flex flex-col w-full mb-8 ${role === 'user' && 'items-end'}`}>
          <div className={`flex relative group max-w-2xl py-3 rounded-xl ${role === 'user' ? 'bg-[#414158] px-5' : 'gap-3'}`}>
            <div className={`absolute opacity-0 group-hover:opacity-100 ${role === 'user' ? '-left-16 top-2.5' : 'left-9 -bottom-6'} transition-all`}> 
              <div className='flex items-center gap-2 opacity-70'>
                  {
                    role === 'user' ?(
                      <>
                        <Image src={assets.copy_icon} alt='Not found' className='w-4 cursor-pointer'/>
                        <Image src={assets.pencil_icon} alt='Not found' className='w-4.5 cursor-pointer'/>
                      </>
                    ):(
                      <>
                        <Image src={assets.copy_icon} alt='Not found' className='w-4.5 cursor-pointer'/>
                        <Image src={assets.regenerate_icon} alt='Not found' className='w-4 cursor-pointer'/>
                        <Image src={assets.like_icon} alt='Not found' className='w-4 cursor-pointer'/>
                        <Image src={assets.dislike_icon} alt='Not found' className='w-4 cursor-pointer'/>
                      </>
                    )
                  }
              </div>
            </div>
            {
              role === 'user' ?
              (
                <span className='text-white/90'>{content}</span>
              )
              :
              (
                <>
                 <Image src={assets.logo_icon} alt='Not found' className='w-9 h-9 border p-1 border-white/15 rounded-full'/>
                 <div className='w-full space-y-4 overflow-scroll'>{content}</div>
                </>
              )
            }
        </div>
      </div>
    </div>
  )
}

export default Message