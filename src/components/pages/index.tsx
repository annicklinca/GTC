import React from 'react'
export default function WelcomeHome () {
  
  return (<>
        <div className='bg-cyan-50 '>
            <div className="flex flex border-b-2 border-teal-300 ">
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
            <div className="flex flex my-4">
            <div className="w-3/4">
             <div className='mx-8 p-4'>
                <h1 className='text-5xl font-bold pt-32'>Find a <span className='text-cyan-400'>doctor</span> & <br></br> make an <span className='text-cyan-400'>appointment</span> online</h1>
               <br></br> <p>Thank you for considering my application. I look forward to the possibility of contributing to your team and the <br></br>chance to discuss how my skills and experience can benefit. I appreciate your time and consideration.</p>
             <div className='flex flex pt-12'>
                <div className='w-1/3 bg-cyan-500 p-2 px-12 font-bold text-white hover:bg-gray-300'>Get Started</div>
                <div className='w-1/3 bg-gray-300 ml-3 p-2 px-12 font-bold hover:bg-cyan-500'>Get Started</div>
             </div>
             </div>
             </div>
             <div className="w-4/4">
                <img src="../assets/ken.png"/>
             </div>
             </div>



        </div>

        {/* #services */}
        <div className='my-3 mx-3'>
            <h1 className='text-4xl font-bold px-12'>Our Services</h1>
            <div className='grid grid-cols-4 mx-12 my-8'>
                <div className=' bg-white px-12 py-4  rounded-md border-r-2 border-r-cyan-500 shadow-md hover:bg-cyan-100'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-cyan-500 font-extrabold ml-12 mt-8 w-12 h-12">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                </svg>
                <h1 className='p-4 font-bold text-xl'>Consultation</h1>
                <p className='p-2  inline-block'><span className='inline-block'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-cyan-500 font-extrabold inline-block w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
              </svg>
              </span><span className='pl-2'>Thank you .</span> 
                 </p>
                 <p className='p-2  inline-block'><span className='inline-block'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-cyan-500 font-extrabold inline-block w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
              </svg>
              </span><span className='pl-2'>Thank you .</span> 
                 </p>
                 <p className='p-2  inline-block'><span className='inline-block'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-cyan-500 font-extrabold inline-block w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
              </svg>
              </span><span className='pl-2'>Thank you .</span> 
                 </p>
                 <p className='p-2  inline-block'><span className='inline-block'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-cyan-500 font-extrabold inline-block w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
              </svg>
              </span><span className='pl-2'>Thank you .</span> 
                 </p> </div>

                 <div className=' bg-white px-12 py-4 rounded-md border-r-2 border-r-cyan-500 shadow-md hover:bg-cyan-100'>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-cyan-500 font-extrabold ml-12 mt-8 w-12 h-12">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>

                <h1 className='p-4 font-bold text-xl'>Consultation</h1>
                <p className='p-2  inline-block'><span className='inline-block'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-cyan-500 font-extrabold inline-block w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
              </svg>
              </span><span className='pl-2'>Thank you .</span> 
                 </p>
                 <p className='p-2  inline-block'><span className='inline-block'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-cyan-500 font-extrabold inline-block w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
              </svg>
              </span><span className='pl-2'>Thank you .</span> 
                 </p>
                 <p className='p-2  inline-block'><span className='inline-block'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-cyan-500 font-extrabold inline-block w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
              </svg>
              </span><span className='pl-2'>Thank you .</span> 
                 </p>
                 <p className='p-2  inline-block'><span className='inline-block'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-cyan-500 font-extrabold inline-block w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
              </svg>
              </span><span className='pl-2'>Thank you .</span> 
                 </p>
                 </div>

                 <div className=' bg-white px-12 py-4 rounded-md border-r-2 border-r-cyan-500 shadow-md hover:bg-cyan-100'>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-cyan-500 font-extrabold ml-12 mt-8 w-12 h-12">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>

                <h1 className='p-4 font-bold text-xl'>Consultation</h1>
                <p className='p-2  inline-block'><span className='inline-block'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-cyan-500 font-extrabold inline-block w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
              </svg>
              </span><span className='pl-2'>Thank you .</span> 
                 </p>
                 <p className='p-2  inline-block'><span className='inline-block'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-cyan-500 font-extrabold inline-block w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
              </svg>
              </span><span className='pl-2'>Thank you .</span> 
                 </p>
                 <p className='p-2  inline-block'><span className='inline-block'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-cyan-500 font-extrabold inline-block w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
              </svg>
              </span><span className='pl-2'>Thank you .</span> 
                 </p>
                 <p className='p-2  inline-block'><span className='inline-block'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-cyan-500 font-extrabold inline-block w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
              </svg>
              </span><span className='pl-2'>Thank you .</span> 
                 </p> </div>

                 <div className=' bg-white px-12 py-4 rounded-md border-r-2 border-r-cyan-500 shadow-md hover:bg-cyan-100'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-cyan-500 font-extrabold ml-12 mt-8 w-12 h-12">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                </svg>
                <h1 className='p-4 font-bold text-xl'>Consultation</h1>
                <p className='p-2  inline-block'><span className='inline-block'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-cyan-500 font-extrabold inline-block w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
              </svg>
              </span><span className='pl-2'>Thank you .</span> 
                 </p>
                 <p className='p-2  inline-block'><span className='inline-block'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-cyan-500 font-extrabold inline-block w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
              </svg>
              </span><span className='pl-2'>Thank you .</span> 
                 </p>
                 <p className='p-2  inline-block'><span className='inline-block'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-cyan-500 font-extrabold inline-block w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
              </svg>
              </span><span className='pl-2'>Thank you .</span> 
                 </p>
                 <p className='p-2  inline-block'><span className='inline-block'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-cyan-500 font-extrabold inline-block w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
              </svg>
              </span><span className='pl-2'>Thank you .</span> 
                 </p> </div>
            </div>
        </div>

        {/* aboutus */}
        <div className='flex flex-wrap mx-12 my-8'>
            <div className='w-1/3'>
                image
            </div>
            <div className='w-2/3'>
                <div className='p-4'>
                    <h1 className='font-bold text-3xl'>Our Doctors</h1>
                    <h4 className='font-bold text-2xl'>Specialize in you</h4>
                    <p className='pt-12'>I would welcome the opportunity to discuss my qualifications further and demonstrate my enthusiasm for this position in an interview. I am available at your convenience and can be reached via email.I believe my background in [mention relevant experience or achievements] has equipped me with the necessary expertise to thrive in the [position title] role.</p>
                <div>
                <p className='p-4  inline-block'><span className='inline-block'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-cyan-500 font-extrabold inline-block w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288" />
                </svg></span><span className='pl-2 font-semibold'>Thank you .</span> </p>
                <p className='pl-12'>the opportunity to discuss my qualifications further and<br></br> demonstrate my enthusiasm for this position in an interview</p>
                </div>
                <div>
                <p className='p-4  inline-block'><span className='inline-block'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-cyan-500 font-extrabold inline-block w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288" />
                </svg></span><span className='pl-2 font-semibold'>Thank you .</span> </p>
                <p className='pl-12'>the opportunity to discuss my qualifications further and<br></br>demonstrate my enthusiasm for this position in an interview</p>
                </div>
                <button className='w-64 bg-cyan-500 p-4 mt-8 font-bold text-white rounded-md'>Add Comment</button>
                



                </div>
            </div>
        </div>
        {/* #footer */}
        <div className='bg-blue-100'>
          <p>- ssssssdds</p>

        </div>

    </>)
}
