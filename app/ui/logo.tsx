import Image from 'next/image'


export default function Logo({className=""}) {
    return (
        <div className={`flex logo ${className}`}>
            <Image className='w-24 h-24' src="/Logo_PPI_Devon.png" width={200} height={200} alt='PPI Logo'/>
        </div>
    );
}