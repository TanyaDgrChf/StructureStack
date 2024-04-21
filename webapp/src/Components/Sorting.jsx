import React from "react";
import { useNavigate } from "react-router-dom";
import {Row, Col, Card} from 'antd';
import Bubblesort from '../Images/Bubblesort.jpg';
import Quicksort from '../Images/Quicksort.jpg';
import Mergesort from '../Images/Mergesort.jpg';
import Insertionsort from '../Images/Insertionsort.jpg';
import Selectionsort from '../Images/selectionsort.jpeg';
import Radixsort from '../Images/radixsort.jpeg';
import { HomeFilled } from '@ant-design/icons';
import { Button } from 'antd';

const { Meta } = Card;

const Sorting = () => {
    const navigate = useNavigate()

    const onBubble = () => {
        navigate('/bubblesort', {replace: true})
    }

    const onInsertion = () => {
        navigate('/insertionsort', {replace: true})
    }

    const onHome = () => {
        navigate('/welcome', {replace: true})
    }

    const onSelection = () => {
        navigate('/selectionsort', {replace: true})
    }

    const onQuick = () => {
        navigate('/quicksort', {replace: true})
    }

    const onRadix = () => {
        navigate('/radixsort', {replace: true})
    }

    const onMerge = () => {
        navigate('/mergesort', {replace: true})
    }

    return(
        <div>  
            <h1 className="sort">Sorting</h1>
            <p>Sorting is any process of arranging items in some sequence and/or in different sets</p>
            <p>Sorting allows process like searching, find the median and more to be much easier and much more efficient.</p>
            <Row gutter={[16, 16]} justify="center" style={{ margin: '0 auto', maxWidth: '1200px', paddingLeft: '16px', paddingRight: '16px', paddingTop: '20px'}}>
            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                <Card
                    hoverable
                    style={{ width: '100%' }}
                    cover={<img src={Insertionsort} />}
                    onClick={onInsertion}
                >
                    <Meta title="Insertion sort" description="" />
                </Card>
            </Col>

            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                <Card
                    hoverable
                    style={{ width: '100%' }}
                    cover={<img src={Bubblesort} />}
                    onClick={onBubble}
                >
                    <Meta title="Bubble sort" />
                </Card>
            </Col>

            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                <Card
                    hoverable
                    style={{ width: '100%' }}
                    cover={<img src={Mergesort} />}
                    onClick={onMerge}
                >
                    <Meta title="Merge sort" description="" />
                </Card>
            </Col>

            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                <Card
                    hoverable
                    style={{ width: '100%' }}
                    cover={<img src={Quicksort} />}
                    onClick={onQuick}
                >
                    <Meta title="Quick sort" description="" />
                </Card>
            </Col>

            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                <Card
                    hoverable
                    style={{ width: '100%' }}
                    cover={<img src={Radixsort} />}
                    onClick={onRadix}
                >
                    <Meta title="Radix sort" description="" />
                </Card>
            </Col>

            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                <Card
                    hoverable
                    style={{ width: '100%' }}
                    cover={<img src={Selectionsort} />}
                    onClick={onSelection}
                >
                    <Meta title="Selection sort" description="" />
                </Card>
            </Col>
            </Row>
            <div style={{ paddingTop: '60px' }}>
                <Button type="primary" icon={<HomeFilled />} shape="circle" onClick={onHome} />
            </div>
        </div> 
    )
}

export default Sorting;