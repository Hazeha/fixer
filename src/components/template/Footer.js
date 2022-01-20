import { BsFacebook, BsTwitter, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";

export default function Footer() {
    return(
        <footer className="w-full flex flex-row h-24 bottom-0 bg-white text-gray-600 justify-between sm:px-12 lg:px-52 mt-5">
            <div className="my-auto font-semibold">
                C 2022 Hyr, Inc. All rights reserved. 
            </div>
            <div className="flex flex-row my-auto text-xl justify-between w-40">
                <BsFacebook className="cursor-pointer"/>
                <BsInstagram className="cursor-pointer" />
                <BsTwitter className="cursor-pointer" />
                <BsGithub className="cursor-pointer" />
                <BsLinkedin className="cursor-pointer" />
            </div>
        </footer>
        
    )
}