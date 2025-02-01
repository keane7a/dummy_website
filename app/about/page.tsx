import Image from "next/image";

export default async function Page() {

    const contents = [
        {
            image: "/about/img_01.jpg", 
            title: "Who We Are", 
            description: "Perhimpunan Pelajar Indonesia (PPI) Devon is a student-run organisation commited to serving the Indonesian community in Devon and its immediate vicinity."
        },
        {
            image: "/about/img_02.jpg",
            title: "Our Vision", 
            description: "Strive to be a leading organisation in Devon that edifies and unites Indonesian students, building a loving community and encouraging intercultural communication."
        }, 
        {
            image: "/about/img_03.jpg", 
            title: "Our Mission", 
            description: "To assist and mentor Indonesian students residing in Devon by means of diverse academic, social, and cultural pursuits. Providing a forum for networking, knowledge exchange, and personal growth."
        },

    ]

    var i = 0; // Counter for reverse
    var isReverse = false;

    return (
        <>
        <div className="flex flex-col items-center p-6">
        <h1 className="font-bold text-4xl md:text-8xl w-9/12 md:w-1/2 text-center">About PPI Devon</h1>
            <div className="flex flex-col w-full pt-4">
                {contents.map(content => {

                    // reverse function
                    i += 1
                    if ((i % 2) == 0) {
                        isReverse = true
                    } else {
                        isReverse = false;
                    }
                        
                    return (
                        <>
                        <div className={`md:flex  ${isReverse ? 'md:flex-row-reverse': ''}`}>
                            <div className={`flex p-4 border-t border-black items-center md:w-1/2 ${isReverse ? "md:border-l": ""}`}>
                                <div className="md:p-10 justify-center">
                                <h1 className="text-center font-bold text-2xl pb-4">{content.title}</h1>
                                <p className="text-center text-lg">{content.description}</p>
                                </div>
                            </div>
                            <div className={`flex p-4 justify-center border-black md:border-t md:w-1/2 ${isReverse ? "": "md:border-l"}`}>
                                <Image src={content.image} width={600} height={600} alt={`Image of ${content.title}`} />
                            </div>
                        </div>
                        </>
                    )
                })}
            </div>
            <Image className="border-t border-black pt-10 mb-10" src="/about/img_04.jpg" width={2000} height={2000} alt=""/>
            <h1 className="font-bold text-4xl md:text-4xl w-9/12 md:w-1/2 text-center ">Our Sponsors</h1>
            <div className="mt-4 flex flex-col md:flex-row w-full items-center justify-between px-14">
            <Image className="w-56 m-4 md:m-0" src="/sponsors/IDX.png" width={2000} height={2000} alt=""/>
            <Image className="w-56 m-4 md:m-0" src="/sponsors/ID_Clear.svg" width={2000} height={200} alt=""/>
            <Image className="w-56 m-4 md:m-0" src="/sponsors/ksei.png" width={2000} height={2000} alt=""/>
            </div>
        </div>


        </>
    );
}
