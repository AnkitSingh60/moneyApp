import React from 'react'
import Navbar from './Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Card } from 'antd';
import { remove } from '../reduxToolkit/cartSlice'


const Cart = () => {
    const data = useSelector((state) => state.cart)

    const dispatch = useDispatch()

    const { Meta } = Card;

    const delItem = (id) => {
        dispatch(remove(id))
    }

    const emptyCart = () => {
        return (
          <div className="emptyDiv">
            <div>
              <div>
                <img
                  src="https://www.apnashopping.in/assets/img/payment/Empty-Cart.jpg"
                  alt="Empty cart"
                />
              </div>
            </div>
          </div>
        );
      };



    return (
        <>
            <Navbar />
    
                               {
                                data.length === 0 && emptyCart()
                               }

            <div className="mzn">
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
                                            }} type="primary" className='btn' onClick={() => delItem(item.id)}>Delete</Button>

                                        </Card>
                              
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Cart