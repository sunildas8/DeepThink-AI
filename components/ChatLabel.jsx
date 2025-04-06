import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const ChatLabel = ({openMenu, setOpenMenu}) => {
  return (
    <div className='flex justify-between items-center p-2 text-white/80 hover:bg-white/10 rounded-lg group text-sm cursor-pointer'>
        <p className='group-hover:max-w-5/6 truncate'>Chat Name here</p>
        <div className='flex justify-center items-center relative group w-6 h-6 aspect-square rounded-lg hover:bg-black/80'>
            <Image className={`w-4 ${openMenu.open ? '' : 'hidden'} group-hover:block`} src={assets.three_dots} alt='Not found' />
            <div className={`absolute ${openMenu.open ? 'block' : 'hidden'} w-max p-2 -right-36 top-6 bg-gray-700 rounded-xl`}>
                <div className='flex justify-center items-center px-3 py-2 gap-3 hover:bg-white/10 rounded-lg'>
                    <Image className='w-4' src={assets.pencil_icon} alt='Not found' />
                    <p>Rename</p>
                </div>
                <div className='flex justify-center items-center px-3 py-2 gap-3 hover:bg-white/10 rounded-lg'>
                    <Image className='w-4' src={assets.delete_icon} alt='Not found' />
                    <p>Delete</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChatLabel