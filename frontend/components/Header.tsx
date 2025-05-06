import React, { useState } from 'react'

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    const buttonClasses = "text-gray-100 font-bold text-sm px-2 py1 border-2 border-gray-100 hover:bg-gray-100 hover:text-gray-800 rounded-lg transition duration-300"
    const buttons = (
      <>
        <button className={buttonClasses}>acerca de</button>
        <button className={buttonClasses}>registrarse</button>
      </>
    );
  return (
      <nav>
          <div className='bg-gray-800 text-white fixed w-full'>
              <div className='max-v-7x1 mx-auto px-4 sm:px-6 lg:px-8'>
                  <div className='flex items-center justify-between h-16'>
                      <div className='text-x1 font-bold'>
                          un nombre
                      </div>
                      <div className='hidden md:block'>
                          <div className='flex ml-10 items-baseline space-x-2'>
                              {buttons}
                          </div>
                      </div>
                  </div>
                  <div className='md:hidden'>
                      <button onClick={() => {setIsOpen(!isOpen)}} type="button"
                      className='fill-gray-100'>

                      </button>
                  </div>
              </div>
              {isOpen &&(
                <div className='flex flex-col gap-y-2 md:hidden px-4 sm:px-6 pb-2'>
{buttons}
                </div>
              )}
          </div>
</nav>
)
}

export default Header