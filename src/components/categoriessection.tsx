import Image from "next/image"
export default function CategoriesSection(){
    return(
        <section>
            <div className="flex flex-wrap lg:justify-between justify-center border-b-2 border-[#3333]  pb-16 mx-10">
                <div className="pt-20 md:pt-40 ">
                    <h3 className="pb-2 text-[#B76E79]">categories</h3>
                    <h1 className="text-5xl font-semibold pb-4 text-[#333333]">Dive into <br /> Beauty</h1>
                    <button className="mt-8 border border-[#333333] px-4 py-1">See More</button>
                </div>

                <div className="flex flex-wrap justify-center gap-2 mt-8">
                    <div className="border px-2 border-[#3333] pt-2 ">
                       
                        <Image src="/skincare.png" alt="skincare" width={250} height={300}/>
                    <p className="py-2">Skincare</p>
                    </div>
                    <div className="border px-2 border-[#3333] pt-2 ">
                       
                        <Image src="/haircare.png" alt="haircare" width={250} height={300}/>
                    <p className="py-2">Haircare</p>
                    </div>
                    <div className="border px-2 border-[#3333] pt-2 ">
                       
                        <Image src="/makeup.png" alt="makeup" width={250} height={300}/>
                    <p className="py-2">Makeup</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
