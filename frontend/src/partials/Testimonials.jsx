import React from 'react'
import {Person1, Person2, Person3, Testimonial} from '../images'

const Testimonials = () => {
  return (
    <section id='testimonials' className="bg-gray-50  dark:bg-gray-800">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2 className="mb-4 text-4xl text-center font-bold text-gray-900 dark:text-white">
        Take a look at what our members say about us
        </h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 place-items-center  sm:grid-cols-1 p-10 gap-10 xl:gap-60 rounded-md'>
          <figure className='bg-white rounded-2xl  shadow-lg overflow-hidden rotate-0 hover:rotate-1 transition'>
            <blockquote className='p-8'>
              <p className='font-bold text-lg'>
              I was blown away by the quality of the images generated by this AI image generation app. The images were so realistic that I had a hard time telling them apart from real photographs. This app has made my work as a designer so much easier, and I highly recommend it to anyone in the creative industry.
              </p>
            </blockquote>
            <div className='flex xl:w-96 items-center justify-between lg:mt-[5.2rem] px-8 py-4 bg-gradient-to-br from-blue-500 to-indigo-500'>
              <div className='flex items-center gap-5'>
                <div className='rounded-full border-4 w-14 h-14 border-white'>
                  <img src={Person3} alt="person" className='w-full h-full rounded-full object-cover' />
                </div>
                <figcaption className='text-white font-semibold'>
                  <div>Sarah Lopez</div>
                  <div className='opacity-70 capitalize'>Graphic Designer</div>
                </figcaption>
              </div>
            </div>
          </figure>

          <figure className='bg-white rounded-2xl  shadow-lg overflow-hidden rotate-0 hover:rotate-1 transition'>
            <blockquote className='p-8'>
              <p className='font-bold text-lg'>
              I never thought I would be able to create such stunning visuals for my marketing campaigns until I discovered this AI image generation app. It's incredibly easy to use, and the results are simply amazing. I've received a lot of positive feedback from my clients, and I couldn't be happier with the results.
              </p>
            </blockquote>
            <div className='flex xl:w-96 items-center justify-between lg:mt-[5.2rem] px-8 py-4 bg-gradient-to-br from-blue-500 to-indigo-500'>
              <div className='flex items-center gap-5'>
                <div className='rounded-full border-4 w-14 h-14 border-white'>
                  <img src={Person2} alt="person" className='w-full h-full rounded-full object-cover' />
                </div>
                <figcaption className='text-white font-semibold'>
                  <div>Alex Hernandez</div>
                  <div className='opacity-70 capitalize'>Marketing Professional</div>
                </figcaption>
              </div>
            </div>
          </figure>

          <figure className='bg-white rounded-2xl  shadow-lg overflow-hidden rotate-0 hover:rotate-1 transition'>
            <blockquote className='p-8'>
              <p className='font-bold text-lg'>
              I was skeptical about using an AI image generation app at first, but after giving it a try, I was blown away by the results. The app's ability to generate high-quality images with just a few clicks is nothing short of amazing. As a photographer, I've been able to use this app to create stunning images that I wouldn't have been able to achieve otherwise.
              </p>
            </blockquote>
            <div className='flex xl:w-96 items-center justify-between px-8 py-4 bg-gradient-to-br from-blue-500 to-indigo-500'>
              <div className='flex items-center gap-5'>
                <div className='rounded-full border-4 w-14 h-14 border-white'>
                  <img src={Person1} alt="person" className='w-full h-full rounded-full object-cover' />
                </div>
                <figcaption className='text-white font-semibold'>
                  <div>Michael Frias</div>
                  <div className='opacity-70'> Professional Photographer</div>
                </figcaption>
              </div>
            </div>
          </figure>
        </div>
        
      </div>
    </div>
  </section>
  )
}

export default Testimonials