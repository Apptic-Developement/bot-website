// imports 
import React from 'react';
import { Features } from './features';

// features section 
const FeaturesSection = () => {
    return (
        <section id="features" className='w-full flex items-center justify-center bg-dark-black'>
            <div className='flex md:flex-row flex-col container px-4 mx-auto my-4 py-4 w-full gap-2 justify-center'>
                <div className='flex flex-col'>
                    <div className='bg-light-black mb-1 text-dark-blurple px-3 py-2 w-fit rounded-2xl'>
                        Features
                    </div>
                    <div className='text-2xl font-bold'>
                        <h2>Awesome Features</h2>
                        <p className='font-normal text-sm text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, soluta!</p>
                    </div>
                </div>
                <div className='flex md:flex-wrap gap-2 mt-5 md:flex-row flex-col'>
                    {
                        Features.map((feature, i) => {
                            return (
                                <div key={i} className='select-none bg-ancent-black md:w-60 px-4 py-4 flex flex-col justify-center rounded-lg w-auto hover:brightness-110 hover:shadow-lg ease-in-out transition-all hover:scale-105'>
                                    <div className='text-light-blurple text-2xl mb-5'>
                                        {feature.icon}
                                    </div>
                                    <div className=''>
                                        <h2 className='text-lg font-bold'>{feature.name}</h2>
                                        <p className='text-gray-400 text-sm'>{feature.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

// export 
export default FeaturesSection;