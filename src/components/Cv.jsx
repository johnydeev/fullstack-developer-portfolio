import Image from 'next/image';
import React from 'react'

const Cv = () => {   

    return (
        <div className="fixed bottom-0 right-0 mr-4 mb-4 lg:mr-8 lg:mb-8">        
            <a
            href="/CV Jonathan Castro - Desarrollador Full Stack.pdf"
            download="CV - Castro Jonathan - Full Stack"
            >
                
            <div className="flex items-center justify-center rounded-full bg-gray-800 shadow-black w-16 h-16">
                
                <Image
                width={40}
                height={100}
                alt="Download Document CV"
                className="object-cover object-center "
                src="/download.svg"
                style={{ filter: 'invert(1)' }}
                ></Image>
            </div>
            </a>
        </div>
    );
}

export default Cv