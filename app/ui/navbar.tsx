'use client';
import Link from 'next/link';
import NavLinks from '@/app/ui/nav-links';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { LiaTimesSolid } from 'react-icons/lia';
import Logo from '@/app/ui/logo';


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    
    return (
    <>
        <div className="bg-white sticky top-0 flex-wrap z-[20] mx-auto flex w-full items-center justify-between p-4"> 
            <Link href="/">
                <Logo/>
            </Link>
            
            <nav className=' flex w-11/12 justify-end border-t border-t-black'>
                <div className='hidden md:flex'>
                    <NavLinks/>
                </div>
                <div className='md:hidden'>
                    <button onClick={toggleNavbar}>{isOpen ? <LiaTimesSolid/> : <RxHamburgerMenu/>} </button>
                </div>
            </nav>
            {isOpen && (
                <div className='flex basis-full flex-col items-center md:hidden'>
                    <NavLinks/>
                </div>
            )}
        </div>
    </>
    );
}















































// {/* <div className='relative flex items-center'>
// {/* logo */}
// <h1 className='mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto'>REACT.</h1>

// {/* Desktop Navigation */}
// <div className='relative hidden lg:flex items-center ml-auto '>
//     <nav className=''> {/*text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200 */}
//         <ul className='flex space-x-8'>
//             <NavLinks/>
//         </ul>
//     </nav>

// </div>

// </div> */}




// border-t-2 border-black
// hidden md:flex

// {/* <div className='bg-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
//       {/* Logo */}
//       <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>

//       {/* Desktop Navigation */}
//       <ul className='hidden md:flex'>
//         {navItems.map(item => (
//           <li
//             key={item.id}
//             className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
//           >
//             {item.text}
//           </li>
//         ))}
//       </ul>

//       {/* Mobile Navigation Icon */}
//       <div onClick={handleNav} className='block md:hidden'>
//         {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//       </div>

//       {/* Mobile Navigation Menu */}
//       <ul
//         className={
//           nav
//             ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
//             : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
//         }
//       >
//         {/* Mobile Logo */}
//         <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>

//         {/* Mobile Navigation Items */}
//         {navItems.map(item => (
//           <li
//             key={item.id}
//             className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
//           >
//             {item.text}
//           </li>
//         ))}
//       </ul>
//     </div> */}