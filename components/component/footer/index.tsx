'use client'

import Image from "next/image";
import { Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
const Footer = () => {
  const separatorStyle =
    "w-[0.35rem] h-[.35rem] bg-black  dark:bg-white rounded-full mx-3";
  return (
    <footer className="w-full text-white bg-black/90 border-white/20 relative mt-0 border-t border-transparent-white/10 px-8 py-[3rem] gap-8 text-sm ">
      <div
        className="
             grid place-items-center grid-cols-1 md:grid-cols-2
             lg:grid-cols-3 mx-auto justify-between items-center gap-4
           "
      >
        <div className="flex items-center gap-4 text-grey transition-colors hover:text-off-white">
          <Image
            src="/vercel.svg"
            alt="PLC Logo"
            width={40}
            height={40}
            className="h-10 rounded-full w-10"
          />
          {/* <Image src={Logos} alt="logo" className="rounded-full w-12 h-12" /> */}
          PLC
        </div>
        <div className=" flex mt-[-20px] justify-center items-center gap-2">
          Need Help?{" "}
          <span className="flex gap-2 items-center underline underline-offset-4 cursor-pointer opacity-60">
            <Link href={"mailto:hello@yourcompany.com"}>
              Plc@yourcompany.com
            </Link>
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>

        <div className="flex space-x-4 col-span-1 md:col-span-2 lg:col-span-1 mt-2 md:mt-0 text-grey items-center ">
          <Link href={"https://x.com/yourcompany"} target="_blank">
            <Twitter />
          </Link>
          <Link
            href="https://www.linkedin.com/company/yourcompany/"
            target="_blank"
          >
            <Linkedin />
          </Link>
          <div className="w-[0.12rem] h-[1.3rem] bg-black dark:bg-white dark:opacity-70"></div>
        </div>
      </div>
      <div className="flex items-center justify-center mx-auto mt-3 md:mt-0">
        <Link href="/privacy">Privacy Policy</Link>
        <div className={separatorStyle}></div>
        <Link href="/terms">Terms</Link>
        <div className={separatorStyle}></div>
        <Link href="/contact">Contact</Link>
        <div className={separatorStyle}></div>
        <Link href="/" className="cursor-not-allowed">
          Pricing
        </Link>
      </div>
    </footer>
  );
};

export default Footer;