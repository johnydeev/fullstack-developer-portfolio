import Image from 'next/image';
import React from 'react'

const Cv = () => {

    const handleDownload = () => {


    }

    return (
        <div className=" fixed flex items-center justify-center rounded-full bg-slate-200 shadow-black w-20 h-20">
            <a href='/CV Jonathan Castro - Desarrollador Full Stack.pdf' download="CV - Castro Jonathan - Full Stack">
                <Image
                width={60}
                height={100}
                alt="Download Document CV"
                className="object-cover object-center"
                src="/download.svg"
                >
                    
                </Image>

            </a>
        </div>
    );
}

export default Cv