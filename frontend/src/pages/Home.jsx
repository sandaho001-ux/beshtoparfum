import React from 'react'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'

const demoProducts = [
  {id:1, name:'Mystic Oud — 10 мл', short:'Тёплый, смоляно-древесный шлейф', price:3500},
  {id:2, name:'Velvet Rose — 10 мл', short:'Глубокая бархатная роза', price:3200},
  {id:3, name:'Dark Amber — 10 мл', short:'Тёплая амбра с ванилью', price:2900},
]

export default function Home(){
  return (
    <div>
      <Hero />
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">Популярные ароматы</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoProducts.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </div>
  )
}
