import { Accordion } from "@/app/ui/accordion";
import { faqs, resources } from "@/app/resources/data";
import { FaArrowRight } from "react-icons/fa6";


function ResourceLink(props:any) {
    return (
        <>
        <a className="text-base focus:outline-none focus-visible:envis-outline active:scale-99 dark:focus-visible:envis-outline-invert 
                        dark:active:envis-outline-invert group relative flex flex-col gap-0 w-full text-slate-blue-95 dark:text-white-100 pt-5 
                        border-b border-grey-40 dark:border-white-100 no-underline" href={props.link} target="_blank">
            <span className="grid grid-cols-[1fr_max-content] gap-14 items-end pb-5 pr-2">
            {props.name}

            <FaArrowRight className="text-black dark:text-white-100 justify-self-end group-hover:translate-x-2 transition-all duration-300"/>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-arrow-right text-black dark:text-white-100 justify-self-end group-hover:translate-x-2 transition-all duration-300"><path fill-rule="evenodd" clip-rule="evenodd" d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z"></path></svg> */}
            </span>
            <span className="w-[0%] h-[1px] bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
        </a>
        </>
    );
}


export default async function Page() {

    return (
        <>
        <div className="mt-8 m-4 md:mx-14">
            {/* Resources */}
            <h1 className="font-bold text-xl md:text-4xl w-full text-left">PPI Devon's Resources</h1>

            <div className="text-slate-80 dark:text-white-100 mb-10">
                <ul className="list-inside md:grid md:grid-cols-2 gap-x-8 gap-y-6 items-end list-none">
                    {resources.map((resource) => {
                        return (
                            <>
                            <li className="">
                                <ResourceLink name={resource.name} link={resource.link}/>
                            </li>
                            </>
                        );
                    })}
                </ul>

            </div>

            {/* FAQs */}
            <h1 className="font-bold text-xl md:text-4xl text-left mb-5">FAQs</h1>
            <div className="rounded-lg bg-gray-100 ">
                    {faqs.map((faq) => {        
                        return (
                            <>
                            <Accordion title={faq.question} content={faq.answer} />
                            </>
                        );
                    })}
                </div>
        </div>
       
        </>
    );
}