import Image from "next/image"

function Techinic() {
    return (
        <section className="bg-white text-gray-600 body-font sm:h-full lg:h-screen xl:h-full mb-8 " id="Techinic">
            <h1 className="sm:text-3xl text-2xl text-center title-font m-4 text-gray-800 font-bold">
                Skills
            </h1>
            <p className="mx-auto max-w-screen text-center text-gray-500 md:text-lg my-8 lg:mb-5">
                Abilities that I possess or have developed
                over time
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 flex-wrap justify-center items-center sm:flex sm:justify-center sm:items-center">
                <div className="flex flex-col items-center rounded-lg h-[200px] w-[185px] bg-gray-100 p-4 lg:p-8 flex-wrap">
                    <h2 className="font-bold text-2xl gap-2 text-center">Next.js</h2>
                    <Image
                        alt="Next.js"
                        loading="lazy"
                        width={24}
                        height={24}
                        decoding="async"
                        data-nimg={1}
                        className=" h-[90px] w-[90px] flex justify-center items-center "
                        style={{ color: "transparent" }}
                        src="/NEXT.JS.svg"
                    />
                </div>
                <div className="flex flex-col items-center rounded-lg  h-[200px] w-[185px] bg-gray-100 p-4 lg:p-8 flex-wrap">
                    <h2 className="font-bold text-2xl gap-3 text-center mb-3">React</h2>
                    <Image
                        alt="Next.js"
                        loading="lazy"
                        width={1080}
                        height={972}
                        decoding="async"
                        data-nimg={1}
                        className="h-[90px] w-[90px] flex justify-center items-center"
                        style={{ color: "transparent" }}
                        src="/React.svg"
                    />
                </div>
                <div className="flex flex-col items-center rounded-lg h-[200px] w-[185px] bg-gray-100 p-4 lg:p-8">
                    <h2 className="font-bold text-2xl gap-3 text-center mb-3 leading-none">
                        Tailwind
                        <br />
                        CSS
                    </h2>
                    <Image
                        alt="Next.js"
                        loading="lazy"
                        width={1080}
                        height={649}
                        decoding="async"
                        data-nimg={1}
                        className="h-[90px] w-[90px] flex justify-center items-center"
                        style={{ color: "transparent" }}
                        src="/Tailwind.svg"
                    />
                </div>
                <div className="flex flex-col items-center rounded-lg h-[200px] w-[185px] bg-gray-100 p-4 lg:p-8 flex-wrap">
                    <h2 className="font-bold text-2xl gap-3 text-center mb-3">Typescript</h2>
                    <Image
                        alt="Next.js"
                        loading="lazy"
                        width={1080}
                        height={1080}
                        decoding="async"
                        data-nimg={1}
                        className="h-[90px] w-[90px] flex justify-center items-center"
                        style={{ color: "transparent" }}
                        src="/TS.svg"
                    />
                </div>
                <div className="flex flex-col items-center rounded-lg h-[200px] w-[185px] bg-gray-100 p-4 lg:p-8 flex-wrap">
                    <h2 className="font-bold text-2xl gap-3 text-center mb-3">Javascript</h2>
                    <Image
                        alt="Next.js"
                        loading="lazy"
                        width={1080}
                        height={1080}
                        decoding="async"
                        data-nimg={1}
                        className="h-[90px] w-[90px] flex justify-center items-center"
                        style={{ color: "transparent" }}
                        src="/javaS.svg"
                    />
                </div>
                <div className="flex flex-col items-center rounded-lg h-[200px] w-[185px] bg-gray-100 p-4 lg:p-8 flex-wrap">
                    <h2 className="font-bold text-2xl gap-3 text-center mb-3">HTML</h2>
                    <Image
                        alt="Next.js"
                        loading="lazy"
                        width={570}
                        height={651}
                        decoding="async"
                        data-nimg={1}
                        className="h-[90px] w-[90px] flex justify-center items-center"
                        style={{ color: "transparent" }}
                        src="/HTML.svg"
                    />
                </div>
                <div className="flex flex-col items-center rounded-lg h-[200px] w-[185px] bg-gray-100 p-4 lg:p-8 flex-wrap">
                    <h2 className="font-bold text-2xl gap-3 text-center mb-3">CSS</h2>
                    <Image
                        alt="Next.js"
                        loading="lazy"
                        width={570}
                        height={652}
                        decoding="async"
                        data-nimg={1}
                        className="h-[90px] w-[90px] flex justify-center items-center"
                        style={{ color: "transparent" }}
                        src="/CSS.svg"
                    />
                </div>
                <div className="flex flex-col items-center rounded-lg h-[200px] w-[185px] bg-gray-100 p-4 lg:p-8 flex-wrap">
                    <h2 className="font-bold text-2xl gap-3 text-center mb-3">Sanity.io</h2>
                    <Image
                        alt="Next.js"
                        loading="lazy"
                        width={1080}
                        height={1080}
                        decoding="async"
                        data-nimg={1}
                        className="h-[90px] w-[90px] flex justify-center items-center"
                        style={{ color: "transparent" }}
                        src="/Sanity.svg"
                    />
                </div>
                <div className="flex flex-col items-center rounded-lg h-[200px] w-[185px] bg-gray-100 p-4 lg:p-8 flex-wrap">
                    <h2 className="font-bold text-2xl gap-3 text-center mb-3">Github</h2>
                    <Image
                        alt="Next.js"
                        loading="lazy"
                        width={1080}
                        height={1080}
                        decoding="async"
                        data-nimg={1}
                        className="h-[90px] w-[90px] flex justify-center items-center"
                        style={{ color: "transparent" }}
                        src="/GitHub.svg"
                    />
                </div>
                <div className="flex flex-col items-center rounded-lg h-[200px] w-[185px] bg-gray-100 p-4 lg:p-8 flex-wrap">
                    <h2 className="font-bold text-2xl gap-3 text-center mb-3">Git</h2>
                    <Image
                        alt="Next.js"
                        loading="lazy"
                        width={24}
                        height={24}
                        decoding="async"
                        data-nimg={1}
                        className="h-[90px] w-[90px] flex justify-center items-center"
                        style={{ color: "transparent" }}
                        src="/git.svg"
                    />
                </div>
            </div>
        </section>
    )
}

export default Techinic