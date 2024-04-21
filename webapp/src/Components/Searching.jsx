import React from "react";
import { useNavigate } from "react-router-dom";
import {Row, Col, Card} from 'antd';
import { HomeFilled } from '@ant-design/icons';
import { Button } from 'antd';
import Binarysearch from '../Images/binarysearch.jpeg';
import Linearsearch from '../Images/linear.jpeg';

const { Meta } = Card;

const Searching = () => {
    const navigate = useNavigate()

    const onHome = () => {
        navigate('/welcome', {replace: true})
    }

    const onLinear = () => {
        navigate('/linearsearch', {replace: true})
    }

    const onBinary = () => {
        navigate('/binarysearch', {replace: true})
    }

    return(
        <div>
            <h1 className="sort">Searching</h1>
            <p>Searching is the process of finding the exisitence of an item in a set and retrieving its position if it exists</p>
            <Row gutter={[16, 16]} justify="center" style={{ margin: '0 auto', maxWidth: '1200px', paddingLeft: '16px', paddingRight: '16px', paddingTop: '20px'}}>
            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                <Card
                    hoverable
                    style={{ width: '100%' }}
                    cover={< img src={Linearsearch} />}
                    onClick={onLinear}
                >
                    <Meta title="Linear search" description="" />
                </Card>
            </Col>

            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                <Card
                    hoverable
                    style={{ width: '100%' }}
                    cover={< img src={Binarysearch} />}
                    onClick={onBinary}
                >
                    <Meta title="Binary search" />
                </Card>
            </Col>

            </Row>
            <div style={{ paddingTop: '60px' }}>
                <Button type="primary" icon={<HomeFilled />} shape="circle" onClick={onHome} />
            </div>
        </div> 
    )

}
export default Searching;