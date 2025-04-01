import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { useClerk, UserButton } from '@clerk/nextjs'
import { useAppContext } from '@/context/AppContext'

const Sidebar = ({expand, setExpand}) => {

    const {openSignIn} = useClerk()
    const {user} = useAppContext()

  return (
    <div className={`flex flex-col justify-between pt-7 bg-[#212327] transition-all z-50 max-md:absolute max-md:h-screen ${expand ? 'p-4 w-64': 'md:w-20 w-0 max-md:overflow-hidden'}`}>
        <div>
            <div className={`flex ${expand ? "flex-row gap-10" : "flex-col items-center gap-8"}`}>
                <Image className={expand ? "w-36" : "w-10"} src={expand ? assets.logo_text : assets.logo_icon} alt='Not found'/>
                <div onClick={()=> expand ? setExpand(false) : setExpand(true)} className='group flex justify-center items-center relative hover:bg-gray-500/20 transition-all w-9 h-9 duration-300 aspect-square rounded-lg cursor-pointer'>
                    <Image src={assets.menu_icon} className='md:hidden' alt='Not found'/>
                    <Image src={expand ? assets.sidebar_close_icon : assets.sidebar_icon} className='hidden md:block w-7' alt='Not found'/>
                    <div className={`absolute w-max ${expand ? "left-1/2 -translate-x-1/2 top-12" : "-top-12 -left-1"} opacity-0 group-hover:opacity-100 bg-black text-white transition px-3 py-2 rounded-lg text-sm shadow-lg pointer-events-none`}>
                        {expand ? "Close sidebar" : "Open sidebar"}
                        <div className={`w-3 h-3 absolute bg-black rotate-45 ${expand ? "left-1/2 -top-1.5 -translate-x-1/2" : "left-4 -bottom-1.5"}`}>
                        </div>
                    </div>
                </div>
            </div>

            <button className={`flex justify-center items-center mt-8 cursor-pointer ${expand ? " bg-primary hover:opacity-90 rounded-2xl gap-2 p-2.5" : "w-9 h-9 mx-auto relative group hover:bg-gray-500/30 rounded-lg"}`}>
                <Image className={expand ? 'w-6' : 'w-7'} src={expand ? assets.chat_icon : assets.chat_icon_dull} alt='Not found'/>
                <div className='absolute w-max -top-12 -mr-11 opacity-0 group-hover:opacity-100 bg-black text-white transition px-3 py-2 rounded-lg text-sm shadow-lg pointer-events-none'>
                    New chat
                    <div className='w-3 h-3 bg-black absolute rotate-45 left-4 -bottom-1.5'></div>
                </div>
                {expand && <p className='text text-white font-medium'>New chat</p>}
            </button>

            <div className={`mt-8 text-sm text-white/25 ${expand ? "block" : "hidden"}`}>
                <p className='my-1'>Recents</p>
                {/* chatLabel */}
            </div>
        </div>

        <div>
            <div className={`flex items-center relative cursor-pointer group ${expand ? "gap-1 text-white/80 text-sm cursor-pointer rounded-lg p-2.5 border border-primary hover:bg-white/10" : "w-10 h-10 mx-auto hover:bg-gray-500/30 rounded-lg"}`}>
                <Image className={expand ? "w-5" : "w-6.5 mx-auto"} src={expand ? assets.phone_icon : assets.phone_icon_dull} alt='Not found'/>
                <div className={`absolute -top-60 pb-8 ${!expand && "-right-40"} opacity-0 group-hover:opacity-100 hidden group-hover:block transition`}>
                    <div className='w-max relative bg-black text-white text-sm p-3 rounded-lg shadow-lg'>
                        <Image className='w-44' src={assets.qrcode} alt='Not found'/>
                        <p>Scan to get DeepThink App</p>
                        <div className={`w-3 h-3 absolute bg-black rotate-45 ${expand ? "right-1/2" : "left-4"} -bottom-1.5`}></div>
                    </div>
                </div>
               {expand && <> <span>Get App</span> <Image src={assets.new_icon} alt='Not found'/> </>}
            </div>
            
            <div onClick={user ? null : openSignIn} className={`flex items-center ${expand ? 'hover:bg-white/10 rounded-lg' : 'justify-center w-full'} gap-3 p-2 mt-2 text-white/60 text-sm cursor-pointer`}>

            {
                user 
                ?
                <UserButton/>
                :
                <Image className='w-7' src={assets.profile_icon} alt='Not found'/>
            }
                {expand && <span>My Profile</span>}
            </div>
        </div>
    </div>
  )
}

export default Sidebar