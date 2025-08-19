const WorkWith=()=>{
    return <div className="py-20 bg-gray-50">    
            <h1 className="text-5xl font-bold text-center ">Working With</h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 mb-3"></div>
            
          {/*  <p className="text-center  text-[35px] " ><a className="hover:text-blue-400" href="https://fastitcare.com">Fast Care IT</a></p>
            <p className="text-center text-[35px] " ><a className="hover:text-blue-400" href="https://topperit.com">Topper IT Ltd</a></p>*/}
               <div className="space-y-6 m-auto  justify-items-center ">
                          <div className="  px-[100px] p-4 py-5 rounded-lg">
                            {/* <h4 className="text-2xl font-semibold text-gray-900 mb-4">WordPress Expertise</h4> */}
                            <ul className="space-y-3 text-xl text-gray-600">
                              <li className="flex items-center">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                                Fast Care IT
                              </li>
                              <li className="flex items-center">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                              Topper IT
                              </li>
                           
                            </ul>
                          </div>
                    
                        </div>
    </div>
};
export default WorkWith;