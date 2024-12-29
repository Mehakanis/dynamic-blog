import Image from "next/image"
export default function Subscription(){
    return(
        <section id="subscribe" >
            <div className="flex flex-col-reverse md:flex-row justify-between mx-14  mt-10 mb-7 text-center md:text-left">
                <div className="pt-10 md:pt-14 w-full md:w-1/2 ">
                    <h3 className="pb-1 text-[#B76E79]">Subscription</h3>
                    <h1 className="text-3xl md:text-4xl font-semibold pb-2 text-[#333333]">Join our exclusive <br /> beauty community</h1>
                    
                    <p>Elevate your beauty journey with personalized <br /> recommendations and stay connected with a community that <br />shares your passion for self-care. Subscribe now and embark <br /> on a beauty adventure with {'us!'}</p>
                <div className="flex md:justify-start justify-center items-center mt-4 md:mt-12 ">
                <div className="mt-12 border border-[#3333] px-2 py-1 flex gap-2 md:gap-8 w-full md:w-[320px] rounded-lg">
                    <input type="text" placeholder="Email Address" className="bg-[#eae9e9]"
                
                    />
                    <div>
                    <button className="bg-[#FFB6C1] text-[#333333] px-3 py-1 rounded-lg">Subscribe</button>
                    </div>
                    </div>
                </div>
                </div>
                <div>
                    <Image src="/subs.png" alt="" width={500} height={500}
                    className=""/>
                </div>
            </div>
        </section>
    )
}