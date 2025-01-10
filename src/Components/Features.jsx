import React from 'react'

const Features = () => {
  return (
    <div>
      

      <div className="px-6 py-12 max-w-7xl mt-16 mx-auto lg:px-8 lg:mt-32">
      <h2 className="font-medium text-4xl md:text-5xl text-center lg:text-left">
        ToDesktop handles the details
      </h2>
    
     
      <div className="mt-10 flex flex-col gap-6 lg:grid lg:grid-cols-3 lg:gap-8 ml-[1px] ">
      
        <div className="rounded-2xl bg-black1 p-[1px]">
          <div className="bg-whiteSlate rounded-2xl w-full h-full p-6 flex flex-col items-center hover:bg-gradient-to-br from-purple-100 via-yellow-100 to-transparent">
            <h3 className="text-2xl text-center font-bold pb-3">Native Notifications</h3>
            <img
              src="https://www.todesktop.com/cdn-cgi/image/width=320,height=88,f=auto,fit=cover/feature-images/notifications@3x.png"
              alt="Native Notifications"
            />
          </div>
        </div>
    
      
        <div className="rounded-2xl bg-black1 p-[1px]">
          <div className="bg-whiteSlate rounded-2xl w-full h-full p-6 flex flex-col items-center hover:bg-gradient-to-br from-purple-100 via-yellow-100 to-transparent">
            <h3 className="text-2xl font-bold pb-3">Auto Updates</h3>
            <p className="text-center font-medium py-4">
              We’ll ensure the underlying browser is up to date and deliver performance improvements,
              security patches, & additional features.
            </p>
            <img
              src="https://www.todesktop.com/cdn-cgi/image/width=320,height=88,f=auto,fit=cover/feature-images/auto-updates@3x.png"
              alt="Auto Updates"
            />
          </div>
        </div>
    
        <div className="rounded-2xl bg-black1 p-[1px] mr-[1px]">
          <div className="bg-whiteSlate rounded-2xl w-full h-full p-6 flex flex-col items-center hover:bg-gradient-to-br from-purple-100 via-yellow-100 to-transparent">
            <h3 className="text-2xl text-center font-bold pb-3">Plugins</h3>
            <img
              src="https://www.todesktop.com/cdn-cgi/image/width=320,height=88,f=auto,fit=cover/feature-images/plugins@3x.png"
              alt="Plugins"
            />
          </div>
        </div>
    
       
        <div className="rounded-2xl bg-black1 p-[1px] mt-[1px]">
          <div className="bg-whiteSlate rounded-2xl w-full h-full p-6 flex flex-col items-center hover:bg-gradient-to-br from-purple-100 via-yellow-100 to-transparent">
            <h3 className="text-2xl font-bold pb-3">Access To Native APIs</h3>
            <p className="text-center font-medium py-4">
              ToDesktop ensures the underlying browser, performance improvements, security patches, and additional features are always up to date.
            </p>
            <img
              src="https://www.todesktop.com/cdn-cgi/image/width=320,height=88,f=auto,fit=cover/feature-images/apis@3x.png"
              alt="Access To Native APIs"
            />
          </div>
        </div>
    
        
        <div className="rounded-2xl bg-black1 p-[1px] mt-[1px]">
          <div className="bg-whiteSlate rounded-2xl w-full h-full p-6 flex flex-col items-center hover:bg-gradient-to-br from-purple-100 via-yellow-100 to-transparent">
            <h3 className="text-2xl text-center font-bold pb-3">Customizable Look and Feel</h3>
            <img
              src="https://www.todesktop.com/cdn-cgi/image/width=320,height=105,f=auto,fit=cover/feature-images/look-and-feel@3x.png"
              alt="Customizable Look and Feel"
            />
          </div>
        </div>
    
        
        <div className="rounded-2xl bg-black1 p-[1px] mt-[1px] mr-[1px]">
          <div className="bg-whiteSlate rounded-2xl w-full h-full p-6 flex flex-col items-center hover:bg-gradient-to-br from-purple-100 via-yellow-100 to-transparent">
            <h3 className="text-2xl font-bold pb-3">Access To Native Installers</h3>
            <p className="text-center font-medium py-4">
              We even provide a magic link which will detect your users' operating system & download the most up-to-date version of your app.
            </p>
            <img
              src="https://www.todesktop.com/cdn-cgi/image/width=320,height=88,f=auto,fit=cover/feature-images/installers@3x.png"
              alt="Access To Native Installers"
            />
          </div>
        </div>
      </div>

</div>



    </div>
  )
}

export default Features
