import { DarkThemeToggle } from "flowbite-react";

import { Button, ButtonGroup } from "flowbite-react";

import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import { Footer } from "flowbite-react";



export default function Navbar({onSearch}) {
    return (
        <header className="shadow-sm border-gray-200 antialiased navbar bg-white dark:bg-gray-800 fixed w-full z-50 top-0">
            <nav className="px-4 lg:px-6 py-2.5 navbar-inner-container">
                <div className="flex justify-between">
                    <div className="flex justify-start items-center">
                        <a href="/" className="flex mr-4">
                            {/* <img src="https://flowbite.s3.amazonaws.com/logo.svg" className="mr-3 h-8" alt="FlowBite Logo" /> */}
                            <span className="self-center text-2xl text-purple-700 font-semibold whitespace-nowrap dark:text-white">Integrations</span>
                        </a>
                        <form action="#" method="GET" className="hidden lg:block lg:pl-2">
                            <label htmlFor="topbar-search" className="sr-only">Search</label>
                            <div className="relative mt-1 lg:w-96">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/> </svg>
                            </div>
                            <input onChange={(event) => onSearch(event.target.value)} type="text" name="email" id="topbar-search" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-9 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" />
                            </div>
                        </form>
                        
                        {/* <DarkThemeToggle /> */}
                        </div>
                    
                <div className="flex justify-end items-center">
                <div className="flex flex-wrap gap-4 mr-4">
                {/* <Button pill color="gray">
                    <BsLinkedin className="h-4 w-4" />
                </Button>
                <Button pill color="gray">
                    <BsInstagram className="h-4 w-4" />
                </Button>
                <Button pill color="gray">
                    <BsGithub className="h-4 w-4" />
                </Button> */}
                <Footer.Icon href="#" icon={BsLinkedin} />
                <Footer.Icon href="#" icon={BsInstagram} />
                <Footer.Icon href="#" icon={BsGithub} />
                </div>
                <button type="button" className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Get a Demo</button>
                </div>
                </div>
            </nav>
        </header>
    )
}