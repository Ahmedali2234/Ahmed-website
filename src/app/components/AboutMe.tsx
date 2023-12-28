import Image from "next/image"

function AboutMe() {
    return (
        <div>
             <div className="text-3xl text-center font-bold text-gray-900" id="AboutMe">
                <h2>About Me</h2>
            </div>
        <div className="flex items-center mx-52 gap-5 text-left mt-8 ">
            <Image src={"/about-poster.jpg"} alt="aboutMe" height={400} width={400} ></Image>



            <p className="text-slate-600 ">Proficient in coding languages such as HTML, CSS, and JavaScript, with the ability to build and maintain websites.
                Skilled in utilizing front-end frameworks (e.g., React) and back-end technologies (e.g., Node.js, Python) to create dynamic and responsive web applications.
                <br />
                <br />
                Experienced in database management (SQL or NoSQL) and version control systems (e.g., Git) for efficient data handling and collaboration.
                Focused on creating an optimal user experience through thoughtful design, responsive layouts, and adherence to UX principles.
                <br />
                <br />
                Adept at problem-solving, debugging, and analyzing code to ensure smooth functionality and identify areas for improvement.
                Dedicated to staying updated on the latest industry trends, frameworks, and tools to incorporate innovative solutions into web development projects.
                Ability to work collaboratively in a team, communicate technical concepts clearly, and adapt to evolving project requirements.
                <br />
                <br />
                Strong attention to detail, ensuring code quality, security, and scalability in web applications.
                Proactive in identifying and addressing potential issues, both in terms of functionality and user experience.
                Enthusiastic about continuous learning and professional growth, exploring new technologies and methodologies to enhance development skills.</p>


        </div>
       </div>
    )
}



export default AboutMe