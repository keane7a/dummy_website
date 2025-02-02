'use client';

import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaFacebookF, FaInstagram} from "react-icons/fa";
import { Profile } from "@/app/about/ourteam/types";
import { Event } from "@/app/events/types";

export function EventCard({event}: {event: Event}) {
    let currentTime = new Date()
    return (
        <>
            <div className="flex flex-col justify-between p-4">
                <div>
                    <h2 className="font-bold text-xl mb-4">{event.title}</h2>
                    <p className="font-normal mb-4">{event.description}</p>
                </div>
                <div>
                    <p><strong>Date:</strong> {event.startTime.toDateString()}</p>
                    <p><strong>Time:</strong> {`${event.startTime.toTimeString().slice(0,5)} - ${event.endTime.toTimeString().slice(0,5)}`}</p>
                    <p><strong>Location:</strong>  {event.location}</p>
                </div>
            </div>
            <Image className="size-full md:h-auto md:w-auto rounded-r-lg" src={event.image} width={200} height={200} alt=""/>
        </>
    );
}

export function ProfileCard({profile}: {profile: Profile}) {

    const logoStyle = "p-2"

    return (
        <>
        <div className="relative flex flex-col items-center basis-1/2 xl:basis-1/4 mb-4">
            <div>
                <Image className="w-full size-80" src={profile.image} width={500} height={500} alt=""/>
            </div>
            <h2 className="text-lg font-bold">{profile.name}</h2>
            <p className="">{profile.role}</p>
            <p className="">{profile.course}</p>

            <div className="flex flex-row">
            
                {"linkedin" in profile ? 
                (
                    <>
                    <Link className={logoStyle} href={profile.linkedin || ""} prefetch={false}>
                        <FaLinkedinIn />
                    </Link>
                    </>
                ):(<></>)}

                {"facebook" in profile ? 
                (
                    <>
                    <Link className={logoStyle} href={profile.facebook || ""} prefetch={false}>
                        <FaFacebookF />
                    </Link>
                    </>
                ):(<></>)}

                {"instagram" in profile ? 
                (
                    <>
                    <Link className={logoStyle} href={profile.instagram || ""} prefetch={false}>
                        <FaInstagram />
                    </Link>
                    </>
                ):(<></>)}
            </div>
        </div>

        </>
    )
}
