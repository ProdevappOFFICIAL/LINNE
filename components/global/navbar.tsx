import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Menu, Play} from 'lucide-react'
import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger,} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type Props = {}

const Navbar = async (props: Props) => {
 // const user = await currentUser()
  return (
<header className=" flex flex-col ">
<div className=' w-full h-[30px] bg-zinc-950 text-zinc-200 flex justify-center font-sans items-center text-[8px] sm:text-[11px] '>
        We have updated Linne Activity Manager (LINNE AM) <div className='w-[0.5px] h-[15px] bg-zinc-800 mx-2 '/> <Link href="#" className=' text-blue-700 hover:underline'>READ MORE</Link> 
        </div>
  <div className='flex w-full  py-4 px-4 items-center justify-between shadow-gray-300 border-neutral-900   text-white fixed right-0 left-0 mt-[30px] backdrop-blur-lg z-[100]  '>
        <aside className="flex items-center gap-[2px]">
          <Button className=' bg-transparent md:hidden sm:visible lg:hidden focus:bg-zinc-950 active:bg-zinc-950 '>
            <Sheet>
              <SheetTrigger><Menu /></SheetTrigger>
              <SheetContent className=' bg-black border-l-transparent shadow-sm pt-[110px]'>
                <SheetHeader>
                  <SheetTitle>
                  </SheetTitle>
                  <SheetDescription>
                    <nav className="flex flex-col">
                      <ul className="flex flex-col items-center gap-4 list-none">
                     
                           <Accordion type="single" collapsible className="w-full">
                               <AccordionItem value="item-1">
                                 <AccordionTrigger  className='flex justify-center items-center w-full px-2  bg-zinc-950 py-2'>
                                   <Link className=' no-underline' href="/site">Products</Link>
                                 </AccordionTrigger>
                                     <AccordionContent className=' bg-zinc-950'>
                                       Yes. It adheres to the WAI-ARIA design pattern.
                                  </AccordionContent>
                                </AccordionItem>
                                 </Accordion>   
                                 
                                 <Accordion type="single" collapsible className="w-full">
                               <AccordionItem value="item-1">
                                 <AccordionTrigger  className='flex justify-center items-center w-full px-2  bg-zinc-950 py-2'>
                                   <Link className=' no-underline' href="/site">Company</Link>
                                 </AccordionTrigger>
                                     <AccordionContent className=' bg-zinc-950'>
                                      <li className=' w-full bg-zinc-950 py-2 rounded-[10px] '>
                                        <Link href="/site">Docs</Link>
                                      </li>
                                      <li className=' w-full bg-zinc-950 py-2 rounded-[10px]'>
  <Link href="/site/product">Pricing</Link>
                        </li>
                                  </AccordionContent>
                                </AccordionItem>
                                 </Accordion>
                       
                        <li className=' w-full bg-zinc-950 py-2 rounded-[10px] '>
                          <Link href="/site">Docs</Link>
                        </li>
                        <li className=' w-full bg-zinc-950 py-2 rounded-[10px]'>
                          <Link href="/site/product">Pricing</Link>
                        </li>
                        <li className=' w-full bg-zinc-950 py-2 rounded-[10px]'>
                          <Link href="/site/about">Changelog</Link>
                        </li>
                     
                      </ul>
                    </nav>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </Button>
          <Image
            src="/images/logo_transparent.png"
            width={40}
            height={40}
            alt="linne logo"
            className="shadow-sm" />
          <p className="text-2xl font-bold">LINNE</p>
        </aside>
        <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden sm:visible md:block">
          <ul className="flex items-center gap-4 list-none">
            <li>
              <Link href="#">Products</Link>
            </li>
            <li>
              <Link href="/site/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="#">Clients</Link>
            </li>
            <li>
              <Link href="#">Resources</Link>
            </li>
            <li>
              <Link href="#">Documentation</Link>
            </li>
            <li>
              <Link href="#">Enterprise</Link>
            </li>
          </ul>
        </nav>
        <Button variant={'outline'} className=' bg-white text-black rounded-[20px]'> Dashboard</Button>
</div>
      </header>
  )
}

export default Navbar