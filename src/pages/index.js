import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { motion } from 'framer-motion'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="md:h-screen w-full bg-slate-800 flex justify-center items-center">

    {/* CAJA PADRE */}

        <div className='h-full md:h-[70%] w-[90%] md:w-[70%] bg-white'>

          {/* CAJA SECUNDARIA  */}
          <div className='md:h-[50%] w-full bg-slate-400 flex flex-col md:flex-row'>

            {/* CONTENEDORES DE IMÁGEN */}
            <motion.div 
            initial={{opacity: 0, y: -100}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1, delay: 0.2}}
            className='md:w-[70%] bg-blue-400'> <Image className='object-cover w-full h-full p-2' src={"https://images.pexels.com/photos/13869886/pexels-photo-13869886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} width={1500} height={1500} alt={"img"}/></motion.div>
            <motion.div 
            initial={{opacity: 0, x: 100}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 1, delay: 0.3}}
            className='md:w-[30%] bg-red-200'> <Image className='object-cover w-full h-full p-2' src={"https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} width={1500} height={1500} alt={"img"}/></motion.div>
          </div>

          {/* CAJA SECUNDARIA  */}
          <div className='md:h-[50%] w-full bg-slate-400 flex flex-col-reverse md:flex-row'>

            {/* CONTENEDORES DE IMÁGEN */}
            <motion.div
             initial={{opacity: 0, x: -100}}
             animate={{opacity: 1, x: 0}}
             transition={{duration: 1, delay: 0.4}}
             className='md:w-[30%] bg-red-200'> <Image className='object-cover object-center h-full w-full p-2' src={"https://images.pexels.com/photos/13869886/pexels-photo-13869886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} width={1500} height={1500} alt={"img"}/></motion.div>
            <motion.div
             initial={{opacity: 0, y: 100}}
             animate={{opacity: 1, y: 0}}
             transition={{duration: 1, delay: 0.5}}
             className='md:w-[70%] bg-blue-400'> <Image className='object-cover object-center h-full w-full p-2' src={"https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} width={1500} height={1500} alt={"img"}/></motion.div>
          </div>
        </div>
    
      </main>
    </>
  )
}
