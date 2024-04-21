import React from 'react';
import { Row, Col, Card, Image, Button } from 'antd';
import { useNavigate } from "react-router-dom";
import DidumIcon from '../Images/didumhci.jpg';
import XCIcon from '../Images/yexincheng.jpeg';
import { LinkedinFilled, GithubFilled, HomeFilled } from '@ant-design/icons';

const AboutUs = () => {
    const navigate = useNavigate();

    const onHome = () => {
        navigate('/welcome',{replace: true})
    }
  return (
    <div className="about-us">
      <h1>The Minds Behind Structure Stack</h1>
      <Row gutter={16}>
        <Col xs={20} sm={12}>
          <Card hoverable cover={<Image src={DidumIcon} alt="Didum" />}>
            <h3 id="icon">Didum Fernando</h3>
            <p>
            Hello! My name is Didum Fernando, and I'm delighted to welcome you to this platform dedicated to exploring the fascinating world of data structures. As a year 2 H2 Computing junior college student at Anderson Serangoon Junior College, I've embarked on a journey to delve deep into the realm of computer science, particularly in the field of data structures. The motive behind creating this website was to enable me to explore beyond the confines of the syllabus as well as strengthen my fundamentals through having an interative way to present how and why data is stored in such a way using the myriad of data structures available. Happy coding</p>
            <a href="https://www.linkedin.com/in/didum-fernando/">
                    <LinkedinFilled style={{ fontSize: '24px', cursor: 'pointer', marginRight: '20px'}} />
                </a>
                <a href="https://github.com/didumfernando">
                    <GithubFilled style={{ fontSize: '24px', cursor: 'pointer'}}/>
                </a>
          </Card>
        </Col>
        <Col xs={20} sm={12}>
          <Card hoverable cover={<Image src={XCIcon} alt="Xincheng" />}>
            <h3 id="icon">Ye Xincheng</h3>
            <p>
            I'm Xincheng, a computing student at ASRJC. As a person who has been learning computer science, I found that initially wrapping my head around visualising data structures to be a challenge, hence the idea to make this app to help both others and myself to understand concepts in computer science on a deeper level. I hope that you can find this website useful on your journey to learn more about computer science</p>
            <a href="https://www.linkedin.com/in/xincheng-ye-73bb49283/">
                    <LinkedinFilled style={{ fontSize: '24px', cursor: 'pointer', marginRight: '20px'}} />
                </a>
                <a href="https://github.com/didumfernando">
                    <GithubFilled style={{ fontSize: '24px', cursor: 'pointer'}}/>
                </a>
          </Card>
        </Col>
      </Row>
      <h2>A Shared Vision</h2>
      <p>
        Our paths crossed through computing lessons and we instantly bonded over our shared passion for demystifying data structures. Together, we combined our technical expertise and design sensibilities to create Structure Stack . We believe that a strong foundation in data structures is key to success in computer science, and we're here to help you build yours too!
      </p>
      <h2>Get in Touch!</h2>
      <p>
        We'd love to hear from you! Feel free to reach out with any questions, comments, or suggestions. You can find us on social media or send an email to didumfernando1234@gmail.com.
      </p>
      <div style={{ paddingTop: '60px' }}>
                <Button type="primary" icon={<HomeFilled />} shape="circle" onClick={onHome} />
            </div>

    </div>
  );
};

export default AboutUs;
