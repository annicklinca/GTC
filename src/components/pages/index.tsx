import React from 'react'
export default function WelcomeHome () {
  
  return (<>
        <div className='bg-cyan-50'>
            <div className="flex flex border-b-2 border-teal-300">
                <div className="w-1/5 mx-8 my-4">
                   <h1 className='text-3xl font-bold text-cyan-400'>GTC<span className="text-black font-bold text-xs">Hospital</span></h1>
                </div>
                <div className='w-3/5 my-8 mx-12'>
                    <ul>
                        <li className='inline-block pl-4 text-cyan-400 font-semibold text-sm'><a href='/'>Home</a></li>
                        <li className='inline-block pl-4 font-semibold text-sm'><a href='/'>About</a></li>
                        <li className='inline-block pl-4 font-semibold text-sm'><a href='/'>Services</a></li>
                        <li className='inline-block pl-4 font-semibold text-sm'><a href='/'>Contactus</a></li>
                    </ul>
                </div>
                <div className='w-1/5 my-8'>
                <button className='bg-cyan-500 text-white p-2 rounded-md font-semibold'><a href="/">Signup</a></button>
                </div>

            </div>
            {/* ---body----- */}
             <div className='mx-8 p-4'>
                <h1 className='text-2xl font-bold pt-24'>Find a <span className='text-cyan-400'>doctor</span> & <br></br> make an <span className='text-cyan-400'>appointment</span> online</h1>
             </div>



        </div>
    </>)
}
