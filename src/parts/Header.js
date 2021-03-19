import React, { useState } from 'react'
import { Transition } from '@headlessui/react'

import Button from 'elements/Button'
import BrandIcon from 'parts/BrandIcon'

export default function Header(props) {

    const path = props.location
    const [isCollapse, setIsCollapse] = useState(false)

    return (
        <header className="header">
            
            <div className="flex justify-between mx-4 lg:mx-0">
                <BrandIcon/>

                <button className="block text-theme-blue lg:hidden focus:outline-none" onClick={() => setIsCollapse(!isCollapse)}>
                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path className={`${isCollapse ? "hidden" : "block"}`} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                        <path className={`${!isCollapse ? "hidden" : "block"}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <ul className={`hidden text-theme-blue tracking-widest items-center lg:flex flex-row mt-0`}>
                <li>
                    <Button 
                        className={`${path === "/" ? "active" : ""} px-3 no-underline hover:underline`}
                        type="link" href="/">
                        Home
                    </Button>
                </li>
                <li className="py-2 lg:py-0">
                    <Button 
                        className={`${path === "/team" ? "active" : ""} px-3 no-underline hover:underline`}
                        type="link" href="/team">
                        Team
                    </Button>
                </li>
                <li className="py-2 lg:py-0">
                    <Button 
                        className={`${path === "/project" ? "active" : ""} px-3 no-underline hover:underline`}
                        type="link" href="/project">
                        Project
                    </Button>
                </li>
                <li>
                    <Button 
                        className={`${path === "/discuss-project" ? "active" : ""} mx-auto ml-3 px-5 py-2 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple border-purple-800 transition duration-200`}
                        type="link" href="/discuss-project">
                        Discuss Project
                    </Button>
                </li>
            </ul>
            
            <Transition
                show={isCollapse}
                enter="transition-opacity duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <ul className={`flex flex-col text-theme-blue tracking-widest mt-5 lg:hidden`}>
                    <li className="py-2">
                        <Button 
                            className={`${path === "/" ? "active" : ""} px-10 no-underline hover:underline`}
                            type="link" href="/">
                            Home
                        </Button>
                    </li>
                    <li className="py-2">
                        <Button 
                            className={`${path === "/team" ? "active" : ""} px-10 no-underline hover:underline`}
                            type="link" href="/team">
                            Team
                        </Button>
                    </li>
                    <li className="py-2">
                        <Button 
                            className={`${path === "/project" ? "active" : ""} px-10 no-underline hover:underline`}
                            type="link" href="/project">
                            Project
                        </Button>
                    </li>
                    <li className="mx-auto mt-7">
                        <Button 
                            className={`${path === "/discuss-project" ? "active" : ""} mx-auto px-5 py-2 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple border-purple-800 transition duration-200`}
                            type="link" href="/discuss-project">
                            Discuss Project
                        </Button>
                    </li>
                </ul>
            </Transition>

        </header>
    )
}
