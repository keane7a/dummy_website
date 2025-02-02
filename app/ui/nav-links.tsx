'use client';

import Link from 'next/link'
import {usePathname} from 'next/navigation'
import clsx from 'clsx';
import {v4 as uuidv4} from "uuid";


// Map of links to display in the navigation.
const links = [
  {name: 'Home', href: '/'},
  {name: 'About', href: '/about', 
    child: 
      [
        {name: "History", href: '/about/history'}, 
        {name: "Our Team", href: '/about/ourteam'}, 
      ]},
  {name: 'Events', href: '/events'},
  {name: 'Resources', href: '/resources'},
  {name: 'Contact Us', href: '/contact'},
];

// Bad nested design function plz fix.
export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
        <div className='group' key={uuidv4()}>
        <Link
              // key={link.name}
              href={link.href}
              className={clsx(
              "p-5 px-10 border hover:border-black md:hover:border-x-black md:hover:border-b-black flex",
              {
                  'md:border-x-black md:border-b-black border-transparent ': pathname == link.href, 'border-transparent': pathname != link.href
              },
              )}
          >
              <p className=" ">{link.name}</p>
          </Link>
          
          {typeof link.child !== 'undefined' ? (
            <div className='group-hover:flex absolute flex-col hidden bg-white shadow text-center'>
            {link.child?.map((child) => {
              return (
                <Link
                  key={uuidv4()}
                  href={child.href}
                  className={clsx(
                  "p-5 cursor-pointer border border-transparent hover:border-black", 
                  {
                    '': pathname == child.href
                  }
                  )}
                
                >
                  <p>{child.name}</p>
                </Link>
              );
            })}
            </div>
          ) : (<></>)}
        </div>
        );
        })}
    </>
  );
}