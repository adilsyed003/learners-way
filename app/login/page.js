import React from 'react'

const login = () => {
    return (
        <>
            <div className="max-w-lg mx-auto p-6 rounded-xl shadow shadow-slate-300 mt-24">
                <h1 className="text-4xl font-medium">Login</h1>
                <p className="text-slate-500">Hi, Welcome back 👋</p>

                <div className="my-5">
                    <button className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-white hover:border-slate-400 hover:text-blue-500 hover:shadow transition duration-150" >
                        <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-6 h-6" alt="" /> <span>Login with Google</span>
                    </button>
                </div>
                <form action="" className="my-10">
                    <div className="flex flex-col space-y-5">
                        <label htmlFor="email">
                            <p className="font-medium text-white pb-2">Email address</p>
                            <input id="email" name="email" type="email" className="w-full py-3 border border-slate-200 bg-transparent rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow text-white" placeholder="Enter email address" />
                        </label>
                        <label htmlFor="password">
                            <p className="font-medium text-white pb-2">Password</p>
                            <input id="password" name="password" type="password" className="w-full py-3 border border-slate-200 bg-transparent rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow text-white" placeholder="Enter your password" />
                        </label>
                        <div className="flex flex-row justify-between">
                            <div>
                                <label htmlFor="remember" className="">
                                    <input type="checkbox" id="remember" className="w-4 h-4 m-1 border-slate-200 focus:bg-indigo-600 " />
                                    Remember me
                                </label>
                            </div>
                            <div>
                                <a href="#" className="font-medium text-indigo-600">Forgot Password?</a>
                            </div>
                        </div>
                        <div className="w-full py-3 font-medium text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm px-5 text-center inline-flex space-x-2 items-center justify-center">
                            <input type="submit" value="Login" />
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                        <p className="text-center">Not registered yet? <a href="#" className="text-indigo-600 font-medium inline-flex space-x-1 items-center"><span>Register now </span><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg></span></a></p>
                    </div>
                </form>
            </div>
        </>
    )
}

export default login