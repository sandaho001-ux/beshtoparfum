import React from 'react'
import { motion } from 'framer-motion'

export default function ProductCard({product}){
  return (
    <motion.div whileHover={{y:-6}} className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition">
      <div className="h-44 rounded-md bg-gray-100 flex items-center justify-center">Image</div>
      <h3 className="mt-4 font-semibold text-lg">{product.name}</h3>
      <p className="text-sm text-gray-600 mt-2">{product.short}</p>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-xl font-bold">{product.price} ₽</div>
        <button className="px-4 py-2 border rounded hover:bg-[#c9a879] hover:text-[#201914]">В корзину</button>
      </div>
    </motion.div>
  )
}
