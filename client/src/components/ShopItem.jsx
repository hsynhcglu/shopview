import React from 'react'
import cafe from '../images/cafe.jpg'
import {BsStarHalf, BsStar, BsStarFill} from 'react-icons/bs'

const ShopItem = ({ name, description, type, star}) => {
  return (
    <div className='rounded-md shadow-lg'>
        <img className='h-48 w-full rounded-md' src={cafe} alt="cafe" />
        <div className='p-2 mt-2'>
            <h1 className="text-txt-c1 text-xl font-medium cursor-pointer">{name}</h1>
            <p>{description}</p>
        </div>
        <div className='flex items-center justify-between h-10 p-2'>
                <div>
                    <h2 className='italic'>{type}</h2>
                </div>
                <div className='flex gap-x-2'>
                    <h2 className='text-txt-c2 font-medium text-xl italic'>{star}</h2>
                    {(Number(star) >= 0 && Number(star) <= 1 ) ? (
                            <BsStar className='text-txt-c2 mt-1' size={20} />
                        ):
                        (Number(star) >= 1 && Number(star) <= 4 ) ? (
                            <BsStarHalf className='text-txt-c2 mt-1' size={20} />
                        ):
                        (<BsStarFill className='text-txt-c2 mt-1' size={20} />)
                    }
                </div>
        </div>
    </div>
  )
}

export default ShopItem