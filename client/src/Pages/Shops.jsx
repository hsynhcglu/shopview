import React from 'react'
import Header from '../components/Header'
import ShopItem from '../components/ShopItem'

const Shops = () => {
  return (
    <>
        <Header />
        <div className='grid grid-cols-4 gap-4 container mx-auto min-h-[350px]'>
            <ShopItem name='Nusret' description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, quod!' type='Restaurant' star='3.5' />
            <ShopItem name='DeFacto' description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, quod!' type='Shop' star='1.0' />
            <ShopItem name='Aslantürk' description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, quod!' type='Shop' star='5.0' />
        </div>
    </>
  )
}

export default Shops