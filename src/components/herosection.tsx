import Image from "next/image";
export default function HeroSection() {
  return (
    <section>
      <div className="flex flex-wrap md:justify-around justify-center items-center lg:gap-[368px] border-b-2 border-[#3333] mx-4 md:mx-12 max-w-full">
        {/* Left side */}
        <div className="text-center md:text-left pt-10 md:pt-24">
          <h3 className="pb-4 text-[#B76E79]">FEATURED</h3>
          <h1 className="text-3xl md:text-5xl font-semibold pb-2 text-[#333333]">
            10 Must-Have
            <br /> Skincare Products <br />
            for Radiant Skin
          </h1>
          <p className="text-[#333333] opacity-[80%]">
            Explore the essential skincare products that can <br />
            transform your daily routine. From hydrating serums <br />
            to powerful antioxidants, discover the secrets to <br />
            achieving radiant and healthy skin.
          </p>
          <button className="px-4 py-2 mt-12 bg-[#FFB6C1] text-[#333333]">
            Read more
          </button>
        </div>

        {/* Right side */}
        <div className="text-right pt-4">
          <Image
            src="/hero.png"
            alt="hero image"
            width={400}
            height={600}
            className="max-w-full mx-auto md:mx-0"
          />
        </div>
      </div>
    </section>
  );
}
