'use client';
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname()

  return (
    <section>
      <Sheet>
        <SheetTrigger>
          <Image className="cursor-pointer"
            src='/icons/hamburger.svg'
            width={30} height={30}
            alt="menu"/>
        </SheetTrigger>
        <SheetContent side={'left'} className="bg-white border-none">
          <Link href="/" className="cursor-pointer flex items-center gap-1 px-4">
            <Image 
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="Horizon logo"
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">G-Finance</h1>
          </Link>

          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex flex-col h-full gap-6 pt-16 text-white">
                {sidebarLinks.map((item) => {
                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)

                return (
                  <SheetClose asChild key={item.route}>
                    <Link href={item.route} key={item.label}
                      className={cn('mobilenav-sheet_close w-full', { 'bg-bank-gradient': isActive })}>
                      
                        <Image 
                          src={item.imgURL}
                          alt={item.label}
                          width={20}
                          height={20}
                          className={cn({
                            'brightness-[3] invert-0': isActive
                          })}
                        />
                   
                      <p className={cn("text-16 font-semibold text-black-2", { "!text-white": isActive })}>
                        {item.label}
                      </p>
                    </Link>
                  </SheetClose>
                )
              })}
              <p className="text-black-1">USER</p>
              </nav>
            </SheetClose>
            <p className="text-black-1">Footer</p>
          </div>

         
          
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
