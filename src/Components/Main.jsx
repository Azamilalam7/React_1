import React from 'react'

const Main = () => {
  return (
    <div className='bg-white text-black'>
         <main>
     
     <div className="min-h-fit">
       <div className="justify-start flex md:justify-center">
         <div
           id="version_text"
           className="flex justify-center my-6 gap-3 items-center border border-yellow-300 bg-yellow-50 rounded-lg w-fit mx-2 hover:-translate-y-1 transition hover:shadow-md shadow-gray-600"
         >
           <div
             className="w-2 h-2 bg-yellow-400 rounded-full border-yellow-600 ml-2"
           ></div>

           <p className="text-yellow-600">
             vO.24.1
             <span className="text-orange-400 font-medium px-2"
               >Fix Release Warnings Shown on Inherited App</span
             >
           </p>
         </div>
       </div>
       
       <div
         className="hidden md:flex justify-center mt-7 items-center gap-2 text-gray-500"
       >
         <p className="mr-5">Code Optional</p>
         <p className="mr-5">Drag & drop builder</p>
         <p>Windows, Mac, Linux</p>
       </div>

       <h1
         className="text-3xl ml-6 font-bold my-10 mt-14 md:text-5xl flex md:justify-center"
       >
         Web app to desktop app in minutes
       </h1>
       <p className="font-medium my-8 text-lg ml-6 flex md:justify-center">
         Make your web app codebase and transform it into a cross platform
         desktop app with native functionality.
       </p>
       <div 
         id="button"
         className="mt-12 flex gap-4 flex-col sm:flex-row sm:justify-center"
       >
         <button
           className="px-8 py-3 font-semibold rounded-lg text-whiteSlate bg-blue-700 hover:bg-blue-600"
         >
           Download Now
         </button>
         <button
           className="px-10 py-3 font-semibold rounded-lg border border-black1 bg-whiteSlate hover:bg-white"
         >
           Read Docs
         </button>
       </div>
     </div>
   </main>
    </div>
  )
}

export default Main
