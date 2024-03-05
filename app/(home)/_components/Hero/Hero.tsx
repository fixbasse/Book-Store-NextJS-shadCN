import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='lg:px-16 h-screen'>

            <section className='flex gap-4 w-full'>
                <div className='relative w-[1200px] h-[500px]'>
                    <Image
                        src='https://images.pexels.com/photos/4581325/pexels-photo-4581325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                        fill
                        alt='/'
                        className='w-full h-full object-cover'
                    />
                </div>

                <div className='hidden lg:flex flex-col gap-4'>
                    <div className='relative w-[375px] h-full'>
                        <Image
                            src='https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                            fill
                            alt='/'
                            className='w-full h-full object-cover'
                        />
                    </div>
                    <div className='relative w-full h-full'>
                        <Image
                            src='https://images.pexels.com/photos/267586/pexels-photo-267586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                            fill
                            alt='/'
                            className='w-full h-full object-covr'
                        />
                    </div>
                </div>

            </section>


        </div>
    )
}

export default Hero