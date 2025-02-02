import Image from "next/image";

export default async function Page() {

    const contents = [
        {
            image: "/about/history/img_01.jpg", 
            title: "Founding and Origins", 
            description: "PPI Exeter was founded in Exeter on 17 November 2008"
        },
        {
            image: "/about/history/img_02.jpg",
            title: "Evolved", 
            description: "On 20 December 2020, PPI Exeter was renamed to PPI Devon for an indefinite period"
        }, 
        {
            image: "/about/history/img_03.jpg", 
            title: "Trademark", 
            description: "Rougemont Castle which is featured on PPI Devon's badge, represents the start of Norman civilisation in Devon following their conquering of the region from the Romans in 1068."
        },
        {
            image: "/about/history/img_04.jpg", 
            title: "Initial Goal", 
            description: "Uniting Indonesian students in Devon under the protection of the Government of the Republic of Indonesia."
        }, 
        {
            image: "/about/history/img_05.jpg", 
            title: "Borderland", 
            description: "PPI Devon serves as the hub for all Indonesian students residing in Devon, Cornwall, and the neighbouring areas, including Plymouth."
        }
    ]

    var i = 0; // Counter for reverse
    return (
        <>
        <div className="flex flex-col items-center p-6 border-b border-black">
        <h1 className="font-bold text-4xl md:text-8xl text-center">Our History</h1>
        <p className="text-l text-center w-11/12 md:w-1/2 py-10 md:py-16">
            Understanding the history of your organisation can help you make strategic 
            decisions and determine its future course by giving you important insights into 
            its founding principles and significant turning points. This information strengthens 
            commitment and alignment among your members by promoting a feeling of identity and continuity.
        </p>
            <div className="flex flex-col w-full mb-10">
                {contents.map(content => {
                    // reverse function
                    i += 1
                    return (
                        <div className={`md:flex  ${i % 2 ? 'md:flex-row-reverse': ''}`} key={content.title}>
                            <div className={`flex p-4 border-t border-black md:border-transparent items-center md:w-1/2 ${i % 2 ? "md:border-l": ""}`}>
                                <div className="md:p-10 justify-center">
                                <h1 className="text-center font-bold text-2xl pb-4">{content.title}</h1>
                                <p className="text-center text-lg">{content.description}</p>
                                </div>
                            </div>
                            <div className={`flex pb-4 md:p-0 justify-center border-black md:border-transparent md:border-t md:w-1/2 ${i % 2 ? "": "md:border-l"}`}>
                                <Image className={`${i % 2 ? "md:origin-top-left md:rotate-3": "md:origin-top-left md:-rotate-3"}`} src={content.image} width={600} height={600} alt={`Image of ${content.title}`} />
                            </div>
                        </div>
                    )
                })}
            </div>
                
        </div>


        </>
    );
}
