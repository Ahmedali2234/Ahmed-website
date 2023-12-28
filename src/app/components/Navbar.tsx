import Image from "next/image"


function Navbar() {
    return (
       <header className="flex justify-between  bg-gray-200 items-center px-3 lg:fixed w-full z-20 start-0 top-0 ">
           <div className="">
             <Image src={"/a.png"} alt="logo" height={60} width={60}></Image>
           </div>
           <div className="hidden md:flex">
             <ul className="flex  gap-5 px-3 ">
              <li><a href="/">Home</a></li>
              <li><a href="#AboutMe">About</a></li>
              <li><a href="#Techinic">Skills</a></li>
              <li><a href="#Projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
             </ul>
           </div>
       </header>
    )
}

export default Navbar