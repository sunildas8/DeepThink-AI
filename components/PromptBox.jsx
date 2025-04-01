import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const PromptBox = ({isLoading, setIsLoading}) => {

    const [prompt, setPrompt] = useState('')

  return (
    <form className={`w-full ${false ? "max-w-3xl" : "max-w-2xl"} bg-[#404045] rounded-3xl p-4 mt-4 transition-all`}>
        <textarea 
        className='w-full outline-none resize-none overflow-hidden bg-transparent break-words mb-3 text-sm font-think'
        rows={2}
        placeholder='Message DeepThnik' required onChange={(e)=> setPrompt(e.target.value)} value={prompt}/>

        <div className='flex justify-between items-center text-sm'>
            <div className='flex items-center gap-2'>
                <p className='flex items-center gap-2 border border-gray-300/40 text-xs cursor-pointer rounded-full px-2 py-1 hover:bg-gray-500/20 transition'>
                    <Image className='h-5' src={assets.deepthink_icon} alt='Not found'/>
                    DeepThink (R1)
                </p>
                <p className='flex items-center gap-2 border border-gray-300/40 text-xs cursor-pointer rounded-full px-2 py-1 hover:bg-gray-500/20 transition'>
                    <Image className='h-5' src={assets.search_icon} alt='Not found'/>
                    Search
                </p>
            </div>

            <div className='flex items-center gap-4'>
               <Image className='w-4 cursor-pointer' src={assets.pin_icon} alt='Not found'/>
               <button className={`${prompt ? "bg-primary" : "bg-[#71717a]"} rounded-full p-2 cursor-pointer`}>
                 <Image className='w-3.5 aspect-square' src={prompt ? assets.arrow_icon : assets.arrow_icon_dull} alt='Not found'/>
               </button>
            </div>
        </div>
    </form>
  )
}

export default PromptBox