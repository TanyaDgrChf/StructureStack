import React from "react";
import { AntDesignOutlined, UserOutlined, HomeOutlined } from '@ant-design/icons';
import { Avatar, Divider, Tooltip } from 'antd';
import { Breadcrumb } from 'antd';
import {Layout, Card, Row, Col} from 'antd';
import { useNavigate } from 'react-router-dom';
import Sort from "../Images/sorting.jpeg";
import Stack from "../Images/Stacks.jpeg";
import LL from "../Images/LL.jpeg";
import Queue from "../Images/Queues.jpeg";
import Didum from "../Images/icondidum.jpeg";
import XC from "../Images/yexincheng.jpeg";
import BST from "../Images/BST.jpeg";
import HT from "../Images/ht.jpeg";
import Array from "../Images/array.jpeg";
import Graphs from "../Images/graphs.jpeg";
import Searching from "../Images/searching.jpeg";
const { Meta } = Card;


const {Content, Footer} = Layout;


const Contentdesc = () => {
    
    const navigate = useNavigate()

    const onSort = () => {
        navigate('/sorting', {replace: true})
    }

    const onAbout = () => {
        navigate('/about', {replace: true})
    }

    const onSearch = () => {
        navigate('/searching', {replace: true})
    }

    return(
        <Content>
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <div style={{ maxWidth: '800px', width: '100%' }}>
                    <Breadcrumb
                        items={[
                        {
                            title: <HomeOutlined style={{ fontSize: '30px' }} />,
                        },
                        {
                            title: (
                            <>
                                <UserOutlined style={{ fontSize: '24px' }} />
                                <span style={{ fontSize: '24px' }} onClick={onAbout}>About Us</span>
                            </>
                            ),
                        },
                        ]}
                    />
                </div>
            </div>
            <h1>Welcome to StructureStack</h1>
            <div style={{ padding: '20px', marginTop: '20px' }}>
            <Row gutter={[16, 16]} justify="center" style={{ margin: '0 auto', maxWidth: '1200px', paddingLeft: '16px', paddingRight: '16px' }}>
                <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Card
                        hoverable
                        style={{ width:'100%'}}
                        cover={<img src={Sort} />}
                        onClick={onSort}
                    >
                        <Card.Meta title="Sorting" description="Includes insertion sort, bubble sort..." />
                    </Card>
                </Col>

        
                <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Card   
                        hoverable
                        style={{width:'100%'}}
                        cover = {<img src ={LL} />}>
                    <Meta title="Linked List" description=" Non-array & array-based linear, circular"/>
                    </Card>
                </Col>
    
                <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Card   
                        hoverable
                        style={{width:'100%'}}
                        cover = {<img src ={Stack} />}>
                    <Meta title="Stacks" description="Using in-built lists, Non-array.."/>
                    </Card>
                </Col>

                <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Card   
                        hoverable
                        style={{width:'100%'}}
                        cover = {<img src ={Queue} />}>
                    <Meta title="Queues" description="Linear & Circular Queues using array-based" />
                    </Card>
                </Col>

                <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Card   
                        hoverable
                        style={{width:'100%'}}
                        cover = {<img src ={BST} />}>
                    <Meta title="Binary Search Tree" description="Includes tree traversals"/>
                    </Card>
                </Col>

                <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Card   
                        hoverable
                        style={{width:'100%'}}
                        cover = {<img  src ={HT} />}>
                    <Meta title="Hash Table" description= "Includes linear probing & chaining.."/>
                    </Card>
                </Col>

                <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Card   
                        hoverable
                        style={{width:'100%'}}
                        cover = {<img  src = {Array} />}>
                    <Meta title="Arrays" description="Fixed size arrays.."/>
                    </Card>
                </Col>

                <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Card   
                        hoverable
                        style={{width:'100%'}}
                        cover = {<img  src = {Graphs} />}>
                    <Meta title="Graphs" description="Includes Djikstra's algorithm"/>
                    </Card>
                </Col>

                <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Card   
                        hoverable
                        style={{width:'100%'}}
                        cover = {<img  src = {Searching} />}
                        onClick={onSearch}>
                    <Meta title="Searching" description="Binary & Linear search"/>
                    </Card>
                </Col>
            </Row>
            </div>
        <Layout>
        <Footer style={{ textAlign: 'center', position: 'fixed', bottom: 0, width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Avatar.Group maxCount={5} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                        <Tooltip title="Didum Fernando" placement="top">
                            <Avatar src={Didum}></Avatar>
                        </Tooltip>
                        <Tooltip title="Ye Xincheng" placement="top">
                            <Avatar src={XC}></Avatar>
                        </Tooltip>
                    </Avatar.Group>
                </div>
            </Footer>
        </Layout>
        </Content>
    )
}
export default Contentdesc

