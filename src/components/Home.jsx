import React, { useState } from 'react'
import { products } from "../data"
import { Card } from 'antd';



const Home = () => {
    const [data, setData] = useState(products)
    // console.log('data:', data)
    const { Meta } = Card;

    return (
        <div className='productContainer'>
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt="example" src="https://i.pinimg.com/736x/fe/ee/0a/feee0aaca047b190f16aac7abdb03ca9.jpg" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt="example" src="https://i.pinimg.com/736x/fe/ee/0a/feee0aaca047b190f16aac7abdb03ca9.jpg" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt="example" src="https://i.pinimg.com/736x/fe/ee/0a/feee0aaca047b190f16aac7abdb03ca9.jpg" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt="example" src="https://i.pinimg.com/736x/fe/ee/0a/feee0aaca047b190f16aac7abdb03ca9.jpg" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt="example" src="https://i.pinimg.com/736x/fe/ee/0a/feee0aaca047b190f16aac7abdb03ca9.jpg" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt="example" src="https://i.pinimg.com/736x/fe/ee/0a/feee0aaca047b190f16aac7abdb03ca9.jpg" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt="example" src="https://i.pinimg.com/736x/fe/ee/0a/feee0aaca047b190f16aac7abdb03ca9.jpg" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt="example" src="https://i.pinimg.com/736x/fe/ee/0a/feee0aaca047b190f16aac7abdb03ca9.jpg" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt="example" src="https://i.pinimg.com/736x/fe/ee/0a/feee0aaca047b190f16aac7abdb03ca9.jpg" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt="example" src="https://i.pinimg.com/736x/fe/ee/0a/feee0aaca047b190f16aac7abdb03ca9.jpg" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt="example" src="https://i.pinimg.com/736x/fe/ee/0a/feee0aaca047b190f16aac7abdb03ca9.jpg" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt="example" src="https://i.pinimg.com/736x/fe/ee/0a/feee0aaca047b190f16aac7abdb03ca9.jpg" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt="example" src="https://i.pinimg.com/736x/fe/ee/0a/feee0aaca047b190f16aac7abdb03ca9.jpg" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt="example" src="https://i.pinimg.com/736x/fe/ee/0a/feee0aaca047b190f16aac7abdb03ca9.jpg" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt="example" src="https://i.pinimg.com/736x/fe/ee/0a/feee0aaca047b190f16aac7abdb03ca9.jpg" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
        </div>
    )
}

export default Home