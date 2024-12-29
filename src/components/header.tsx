import Image from "next/image"
import Link from "next/link"
  
export default function Header(){
    return(
        <section className="w-full md:w-[1248px] h-auto md:h-[78px] pt-4 md:pt-8 px-4 md:px-12">
  <div className="flex flex-wrap items-center justify-between text-center md:text-left border-b-2 border-[#3f3f3f] pb-2">
    {/* Left Navigation - Hidden on Small Screens */}
    <div className="hidden md:flex gap-6 lg:gap-8 text-[#333333]">
      <h3 className="text-sm md:text-base lg:text-lg">Featured</h3>
      <h3 className="text-sm md:text-base lg:text-lg">How-to</h3>
      <h3 className="text-sm md:text-base lg:text-lg">Expert Advice</h3>
    </div>

    {/* Logo */}
    <div className="flex justify-center md:justify-start">
      <Image src="/logo.png" alt="logo" width={40} height={40} />
    </div>

    {/* Right Buttons */}
    <div className="space-x-2 md:space-x-6 text-[#333333]">
      <Link href="#contact">
        <button className="text-sm md:text-base">Contact</button>
      </Link>
      <Link href="#subscribe">
        <button className="text-sm md:text-base">Subscribe</button>
      </Link>
    </div>
  </div>
</section>

    )
}