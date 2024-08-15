import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios'
const API_URL = "https://dummyjson.com"



// dynamic route = useParams
const Detail = () => {
    const { id } = useParams()
    const [data, seData] = useState(null)

    useEffect(() => {
        axios
            .get(`${API_URL}/products/${id}`)
            .then(res => seData(res.data))
            .catch(err => console.log(err))

    }, [])

    

    return (

        <>
            <div className='container flex items-center mt-[50px]'>
                <div className='flex w-[50%]'>
                    <img src={data?.thumbnail} alt="" />
                </div>
                <div className='flex flex-col w-[30%] gap-[15px] '>
                    <div className='flex items-center gap-3'>
                        <h2 className='font-bold text-[25px]'>{data?.title}</h2>
                        <h3 className='font-medium text-[25px]'> {data?.meta.createdAt}</h3>
                    </div>
                    <h3 className='text-[rgb(125,125,125)]'>{data?.description}</h3>
                    <div className='flex  flex-col '>
                        <p className='text-[dodgerblue]'>Height: {data?.dimensions.height}</p>
                        <p className='text-[dodgerblue]'>Width: {data?.dimensions.width}</p>
                    </div>
                    <p className='text-blue-950 font-medium'>Percentage: {data?.discountPercentage} %</p>
                    <div>
                        <p className='text-yellow-500 font-medium'>Price: {data?.price} $</p>
                    </div>  
                    <div className='flex flex-col '>
                        <div className='border-t-slate-600 '>
                            <hr />
                            <p className='py-[5px] cursor-pointer'>Цвет: Черный</p>
                        </div>                 
                        <div className='border-t-slate-600 '>
                            <hr />
                            <p className='py-[5px] cursor-pointer'>Подробнее о товаре</p>
                            <hr />
                        </div>                 
                    </div>
                    <div>
                        <button className='px-[100px] py-[16px] bg-[rgb(255,138,30)] rounded-[32px] cursor-pointer text-white mt-3'>Добаить в корзину</button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Detail