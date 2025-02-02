import Image from "next/image";
import { Accordion } from "@/app/ui/accordion";
import { ProfileCard } from "@/app/ui/cards";
import { Profile, Content } from "@/app/about/ourteam/types";
import { contents } from "@/app/about/ourteam/data";
import {v4 as uuidv4} from "uuid";

function ProfileList({committees}: {committees: Profile[]}) {
    return (
        <>
        <div className="flex flex-wrap flex-col md:flex-row w-full items-center py-8">        
            {committees.map((committee) => {
                return (
                    <ProfileCard profile={committee} key={uuidv4()}/>
                );
            })}
        </div>
        </>
    )
}

export default async function Page() {
    return (
        <>
        <div className="w-full items-center">
                <h1 className="m-auto font-bold text-xl md:text-6xl w-full text-center mb-4">Our Team</h1>
                <p className="text-l text-justify md:text-center w-3/4 md:w-1/2 md:py-4 m-auto" >
                    Being aware of the committees in your organisation is crucial to 
                    comprehending the responsibilities they play in directing the organisation&apos;s 
                    leadership structure. This data makes it easier to collaborate and communicate 
                    effectively, which guarantees that efforts are in line with strategic goals.
                </p>
            <div className="rounded-lg bg-gray-100 mt-8">
                {contents.map((content) => {         
                    var committees = <ProfileList committees={content.committees} /> 
                    return (
                        <Accordion title={`${content.year} - ${content.year + 1}`} content={committees} key={uuidv4()}/>
                    );
                })}
            </div>
        </div>
        
        </>
    );
}





