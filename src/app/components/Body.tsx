import Image from "next/image"

function Body() {
    return (


        <header>

            <div className="flex items-center mt-12 ">
                <div className="flex-1 text-lg text-slate-600  p-24 ">
                    <h1 className="text-3xl font-bold text-gray-900">Hi I am a Web Developer</h1>
                    <p> Hi, I m Ahmed ali, a skilled web developer passionate about creating outstanding online experiences. Specializing in typescript next.js react.js node.js javascript html and CSS, I bring innovation, full-stack proficiency, and an eye for design to every project. Lets collaborate to turn your ideas into a stunning reality!</p>
                </div>

                <div className="flex-1 p-8 pl-28 ">
                    <Image src={"/a.png"} alt="hero-poster" height={500} width={500}></Image>
                </div>
            </div>
        </header>
    )
}

export default Body