import React from 'react'

const Contact = () => {
  return (
    <div className="bg-white h-screen pt-20 pl-10 md:pl-20 pr-10 md:pr-20">
      <p className="text-7xl text-center">Contact Me</p>
      <p className="text-center">Let's work together or drop me a message and say hello</p>
      <div className="pt-10 flex flex-col md:flex-row justify-center">
        <div className="basis-1/2 md:p-8">
          <div className="mb-2">
            <label>Name:</label>
            <input type="text" className="block p-2 border rounded border-[#191919] w-[100%]" />
          </div>
          <div className="mb-2">
            <label>Email:</label>
            <input type="email" className="block p-2 border rounded border-[#191919] w-[100%]" />
          </div>
          <div className="">
            <label>Message:</label>
            <textarea name="message" className="block p-2 border rounded border-[#191919] w-[100%]" />
            {/* <input type="email" className="block p-2 border rounded border-[#191919] w-[100%]" /> */}
          </div>
          <button className="p-2 mt-6 bg-[#191919] text-white rounded hover:bg-white hover:text-[#191919] hover:border-2 hover:border-[#191919]">Submit</button>
        </div>
        <div className="basis-1/2 border-4 rounded p-8">

        </div>
      </div>
    </div>
  )
}

export default Contact