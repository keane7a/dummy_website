import Image from "next/image";
import { EventCard } from "@/app/ui/cards";
import { events } from "@/app/events/data";

export default async function Page() {
    let currentTime = new Date()
    return (
        <>
        <h1 className="font-bold text-xl md:text-6xl w-full text-center">Events</h1>
        <div className="flex flex-wrap w-full justify-center">
            {events.map((event) => {
                return (
                    <div key={event.title} className={"flex flex-col-reverse border border-black rounded-lg md:flex-row m-4 md:w-7/12 " + ((currentTime > event.startTime) ? 'grayscale': '')}>
                        <EventCard event={event}/>
                    </div>
                )
            })}
        </div>
       
        </>
    );
}  