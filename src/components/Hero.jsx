import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="bg-[#eae3d9] text-[#201914]">
      <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1">
          <motion.h1 initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.6}} className="text-5xl font-playfair leading-tight">
            BeshtoParfum
          </motion.h1>
          <motion.p initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.8}} className="mt-4 text-lg max-w-xl">
            Искусство масляной парфюмерии — концентрированные композиции с роскошным шлейфом.
          </motion.p>
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}} className="mt-8">
            <a href="/catalog" className="inline-block rounded-lg px-6 py-3 border border-[#c9a879] hover:bg-[#c9a879] hover:text-[#201914] transition">Перейти в каталог</a>
          </motion.div>
        </div>
        <motion.div className="flex-1 flex justify-center" initial={{scale:0.95, opacity:0}} animate={{scale:1, opacity:1}} transition={{duration:0.8}}>
          <div className="w-80 h-96 relative">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#fff7ec] to-[#ebdfcf] shadow-xl p-6 flex items-end justify-center">
              <div className="w-28 h-56 bg-[#201914] text-white rounded-md flex items-center justify-center">Bottle</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
