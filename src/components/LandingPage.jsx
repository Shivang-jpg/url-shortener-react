import React from 'react'

const LandingPage = () => {

    let disc =
        "Generate short, memorable links with ease using Linklytics’s intuitive interface. Share URLs effortlessly across platforms. Optimize your sharing strategy with Linklytics. Track clicks and manage your links seamlessly to enhance your online presence. Generate short, memorable links with ease using Linklytics’s intuitive interface. Share URLs effortlessly across platforms.";

    return (
        <div className="min-h-[calc(100vh-64px)]  lg:px-14 sm:px-8 px-4">
            <div className="lg:flex-row flex-col    lg:py-5   pt-16   lg:gap-10 gap-8 flex justify-between items-center">
                <div className=" flex-1"></div>
                <h1 className="font-bold font-roboto text-slate-800 md:text-5xl sm:text-4xl text-3xl   md:leading-[55px] sm:leading-[45px] leading-10 lg:w-full md:w-[70%] w-full">

                    Linklytics Simplifies URL Shortening For Efficient Sharing.
                </h1>

                <p className='text-slate-700 text-sm my-5'>
                    Linklytics streamlines the process of URL shortening, making sharing
                    links effortless and efficient. With its user-friendly interface,
                    Linklytics allows you to generate concise, easy-to-share URLs in
                    seconds. Simplify your sharing experience with Linklytics today.

                </p>
                <div className="flex items-center gap-3">
                    <button className='bg-custom-gradient w-40 text-white rounded-md py-2'>
                        Manage Links
                    </button>

                    <button className="border-btnColor border w-40 text-btnColor rounded-md py-2">
                      Create Short Link
                    </button>

                </div>
            </div>
        </div>


    )
}

export default LandingPage