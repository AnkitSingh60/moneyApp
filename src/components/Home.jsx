import React, {  useState } from 'react'
import { useDispatch } from 'react-redux';
import { products } from "../data"
import { Button, Card } from 'antd';
import Navbar from './Navbar';
import {add} from "../reduxToolkit/cartSlice"





const Home = () => {
    const [data, setData] = useState(products)

    const { Meta } = Card;

    const dispatch = useDispatch()



    const buyItem = (item) => {
        dispatch(add(item))
    // console.log('item:', item)
    
    }

    return (
        <>
            <Navbar />
            <div className='productContainer'>
                {data.map((item, index) => {
                    return (
                        <>
                            <Card className="item" key={item.id}
                                hoverable
                                cover={<img className='image' alt="example" src={item.image} />}
                            >
                                <Meta className="title" title={item.title.slice(0, 14) + "..."} />
                                <Button style={{
                                    width: 240, margin: "auto"
                                }} type="primary" className='btn' onClick={()=>buyItem(item)}>Buy</Button>
                            </Card>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Home