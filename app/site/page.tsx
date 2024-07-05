import { CardBody ,CardContainer,CardItem } from '@/components/global/3d-card'
import { HeroParallax } from '@/components/global/connect-parallax'
import { ContainerScroll } from '@/components/global/container-scroll-animation'
import { LampComponent } from '@/components/global/lamp'
import { InfiniteMovingCards } from '@/components/global/infinite-moving-cards'
import { Button } from '@/components/ui/button'
import { clients, products } from '@/lib/constant'
import { CheckIcon } from 'lucide-react'
import Image from 'next/image'
import { FlipWords } from '@/components/global/flip_words'
import { Separator } from '@/components/ui/separator'

export default function Home() {
  const words = ["better", "cute", "beautiful", "modern"];
  //WIP: remove fault IMAge for home page
  return (
     <>
  
     <section className="h-screen w-full  bg-black rounded-md  !overflow-visible relative flex flex-col items-center  antialiased mt-[80px] sm:mt-0">
        <div className="absolute inset-0  h-full w-full items-center px-5 py-24 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div className="flex flex-col mt-[-0px] md:mt-[-0px]">
          <ContainerScroll
            titleComponent={<div className="flex items-center flex-col bg-transparent">
              <Button
                size={'lg'}
                className="p-8 mb-8 md:mb-0 text-2xl w-full mx-[50px] sm:mx-0 sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-gray-400 hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
              >
                <span className=" bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-black  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                  Start For Free Today
                </span>
              </Button>
              <h1 className="text-5xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-600 font-sans font-bold">
              <div className="w-fit text-4xl sm:text-5xl  py-10 mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Build
        <FlipWords words={words} /> <br />
        Websites with ease
        </div>
              </h1>
            </div>} > 
            <Image
          src={`/images/web-1.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
            </ContainerScroll>
        </div>
      </section>
      <section className=' mt-[100px] w-full'>
        <HeroParallax products={products}></HeroParallax>
      </section>
  
      <div className="flex flex-col mt-[100px] w-full">
        <LampComponent />
        <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8">
          
       
          <CardContainer className="inter-var ">
            <CardBody className=" bg-zinc-950  relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Hobby
                <h2 className="text-6xl ">$0</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Get a glimpse of what our software is capable of. Just a heads
                up {"you'll"} never leave us after this!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />3 Free automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    100 tasks per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Two-step Actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-zinc-800 dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var ">
            <CardBody className="bg-zinc-950 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-[#E2CBFF] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Pro Plan
                <h2 className="text-6xl ">$29</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Get a glimpse of what our software is capable of. Just a heads
                up {"you'll"} never leave us after this!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />3 Free automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    100 tasks per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Two-step Actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-zinc-800 dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var shadow-sm ">
            <CardBody className="bg-zinc-950 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Unlimited
                <h2 className="text-6xl ">$99</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Get a glimpse of what our software is capable of. Just a heads
                up {"you'll"} never leave us after this!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />3 Free automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    100 tasks per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Two-step Actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-zinc-800 dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </div>
      
      <div className=' flex flex-col bg-transparent bg-zinc-950 h-full w-full text-white  '>
        <div className=' flex flex-col items-center justify-center w-full h-[500px] group-hover:bg-gradient-to-r  bg-gradient-to-r from-black/80 to-black group-hover:from-black goup-hover:to-black shadow-lg rounded-2xl mb-10 '>
        <Button
                size={'lg'}
                className="p-8 mb-8 md:mb-0 text-2xl w-full  border-t-2 rounded-full border-[#4D4D4D] bg-gray-400 hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
              >
                <span className="bg-clip-text text-transparent sm:text-xl bg-gradient-to-r from-gray-500 to-black  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                  Start For Free Today
                </span>
              </Button>
        </div>
    
    <div className=' h-5'/>
    <div className='w-full h-[1px] bg-zinc-800'/>
    <div className=' bg-black px-2 sm:px-10 font-light p-5'>
    <aside className="flex  items-center gap-[2px]">
          <Image
            src="/images/logo_transparent.png"
            width={22}
            height={30}
            alt="linne logo"
            className="shadow-sm" />
          <p className="text-xl font-bold">LINNE</p>
        </aside>
    </div>
    <div className='items-center justify-center   grid gap-y-5 gap-x-5 grid-cols-2 sm:grid-cols-4 font-sans bg-black px-8 sm:px-16 font-light p-5'>
      <div className=' flex flex-col text-[9px]'>
        <p className=' text-zinc-400 text-[12px] font-thin'> Product</p>
        <p> Pricing</p>
        <p> Dashboard</p>
        <p> Feature Requests</p>
      </div>
      <div className=' flex flex-col text-[9px]'>
        <p className=' text-zinc-400 text-[12px]'> Product</p>
        <p> Pricing</p>
        <p> Dashboard</p>
        <p> Feature Requests</p>
      </div>
      <div className=' flex flex-col text-[9px]'>
        <p className=' text-zinc-400 text-[12px]'> Product</p>
        <p> Pricing</p>
        <p> Dashboard</p>
        <p> Feature Requests</p>
      </div>
      <div className=' flex flex-col text-[9px]'>
        <p className=' text-zinc-400 text-[12px]'> Product</p>
        <p> Pricing</p>
        <p> Dashboard</p>
        <p> Feature Requests</p>
      </div>
    </div>
    <div className=''>
      <div className='w-full h-[1px] bg-zinc-800'/>
    </div>

    <div className=' flex flex-row justify-between text-[9px] p-5'>
  <p className=' text-zinc-400'>2024 Linne Inc</p>

  <p className=' italic text-zinc-400'>Pruto Technologies </p>
    </div>
      </div>
      </>
    
  )
}