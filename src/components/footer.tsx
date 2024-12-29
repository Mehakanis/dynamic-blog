import Image from "next/image";
export default function Footer() {
  return (
    <section id="contact" className="px-4 md:px-12 mx-auto w-full  lg:w-[1300px]">
  <div className="flex flex-col md:flex-row items-center justify-between border-t-2 pt-8 pb-4 text-center border-[#3f3f3f]">
    {/* Logo Section */}
    <div className="mb-4 md:mb-0">
      <Image src="/logo.png" alt="logo" width={50} height={50} />
    </div>

    {/* Icons Section */}
    <div className="mb-4 md:mb-0 md:pl-32">
      <Image src="/icon.png" alt="icons" width={120} height={60} />
    </div>

    {/* Policies Section */}
    <div className="flex flex-col md:flex-row gap-2 md:gap-4 text-[#333333]">
      <h3>Privacy policy</h3>
      <h3>Cookie Policy</h3>
    </div>
  </div>
</section>

  );
}
