import React from 'react';




const Login = () => {
  return (
    <div className="flex justify-center overflow-hidden items-center h-screen bg-[#F3EEEA] border border -[#685648] p-3 z-10">
      <div className="bg-[#F3EEEA] w-full h-[97vh] border  border-[#685648]  ">

        


        {/* left side gray box */} 
      <div className="absolute top-3 left-3.5 w-3/12 h-48 bg-[#DAD0C6]   pb-3 pr-4  rounded-br-full ">
      <div className="absolute w-[calc(100%-2rem)] h-40 bg-[#e0d8cf] rounded-br-full "></div>
      </div>

      {/* MINIMALISM */}
      
          {/* Background text (for the layered effect) */}
          <div className="font-italiana absolute top-[-45px] left-1/2 transform -translate-x-1/3 text-[150px]  text-[#ffffff] opacity-80  tracking-normal ">
            MINIMALISM
          </div>

          {/* Foreground text */}
          <div className="font-italiana absolute top-15 left-[55%] transform -translate-x-1/2 text-[150px] opacity-50  text-[#685648] leading-none tracking-normal">
           MINIMALISM
          </div>


          {/* right bottom box */}
          <div className="absolute  bottom-3 right-3.5 w-2/12 h-48 bg-[#DAD0C6]   pb-3 pr-4  rounded-tl-full ">
            <div className="absolute w-[calc(100%-2rem)] h-40 bg-[#e0d8cf] rounded-tl-full "></div>
          </div>

            {/* left bottom circle design */}
            
            <div className="absolute  bottom-3 left-3.5 w-1/12 h-[72vh] bg-[#F3EEEA] border border-[#aca49e] p-4 rounded-tr-full opacity-80">
            <div className=" bg-[#8d8782] h-full w-full p-2 opacity-50  rounded-tr-full p-4 ">
            <div className=" bg-[#b4b2b0] h-full w-full p-2 opacity-50  rounded-tr-full p-4 "></div>

            </div>
           
            </div>

            {/*plant*/}
            
           






            
           {/*login form*/}
            {/* right side login form */}
        <div className="absolute right-40 top-0 h-full w-1/3  flex flex-col justify-center items-center p-8">
          {/* Login heading */}
          <h1 className="text-3xl  text-[#685648] font-italiana mb-4">LOG IN</h1>

          {/* Welcome text */}
          <p className="text-sm text-gray-600 mb-8">WELCOME</p>

          {/* Username field */}
          <div className="w-full mb-4">
            <label className="block text-lg font-medium mb-1 text-[#685648] font-italiana">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-b-[#685648] bg-[#F3EEEA] shadow-sm focus:outline-none focus:ring focus:border-[#685648]"
              placeholder="Enter your username"
            />
          </div>

          {/* Password field */}
          <div className="w-full mb-4">
            <label className="block text-lg font-medium  mb-1 text-[#685648] font-italiana">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-b-[#685648] shadow-sm bg-[#F3EEEA] focus:outline-none focus:ring focus:border-[#685648]"
              placeholder="Enter your password"
            />
          </div>

          {/* Remember me & Forgot password */}
          <div className="w-full flex justify-between items-center mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-[#685648] border-gray-300 rounded focus:ring-[#685648]"
              />
              <label htmlFor="remember" className="ml-2 text-md text-[#685648]">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-[#685648] hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Login button */}
          <button className="w-1/3 py-2 bg-[#D5C5A3] border border-[#685648] text-[#685648] font-semibold rounded-full hover:transition duration-200">
            Log in
          </button>

          {/* "Don't have an account?" section */}
          <div className="mt-6 text-center text-sm text-[#685648]">
          
           <span className="ml-2">Don't have an account?</span>
            <a href="#" className="ml-1 text-[#685648] font-semibold hover:underline">
            Register
            </a>
          </div>

          
        </div>


          
        




       {/* right sid everticle box */}
       <div className="absolute top-3 right-3.5 w-1/12 h-[97vh] bg-[#D7C3A2] p-2 opacity-50">
       <div className="bg-[#ffffff] h-full w-full p-2 opacity-50"></div>
       </div>



     
    

       
      </div>
    </div>
  );
};

export default Login;
