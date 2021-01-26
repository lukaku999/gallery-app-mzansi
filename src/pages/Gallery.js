import React from 'react';


import Image from  "../components/Images"

const Gallery = () => {

   
    return (<div>
                {console.log("render")}
                <section className ="flex justify-center text-center">
                        <div className="w-full">
                        
                        <Image/>
                            
                        </div>
                    </section>
            </div>)


}

export default Gallery