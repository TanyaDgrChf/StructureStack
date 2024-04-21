import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spin, Typography, Statistic, Button } from 'antd';
import CountUp from 'react-countup';
import '../../src/App.css'; // Assuming your CSS file is named App.css
import { Link } from 'react-router-dom'; // For navigation links

const formatter = (value) => <CountUp end={value} separator="," />;

const { Title } = Typography;

const Load = () => {
  const [loading, setLoading] = useState(true);
  const [userCount, setUserCount] = useState(0);
  const navigate = useNavigate();

  const onHome = () => {
    navigate('/welcome', { replace: true });
  };

  const onAbout = () => {
    navigate('/about', {replace: true})
  }

  // Fetch user count from localStorage upon rendering
  useEffect(() => {
    const storedCount = localStorage.getItem('userCount');
    setUserCount(storedCount ? parseInt(storedCount) : 0);
    setLoading(false);
  }, []);

  // Update user count on every page load and store it in localStorage
  useEffect(() => {
    const updateCount = async () => {
      const newCount = userCount + 1;
      setUserCount(newCount);
      localStorage.setItem('userCount', newCount);
    };

    updateCount();

    // Optional expiration time for user count (consider user inactivity)
    const timeoutId = setTimeout(async () => {
      setUserCount(0);
      localStorage.removeItem('userCount');
    }, 3600000); // 1 hour

    return () => clearTimeout(timeoutId);
  }, [userCount]); // Update count only when userCount changes

  return (
    <div className="App">
      {loading ? (
        <div className="loading-container">
          <Spin size="large" />
        </div>
      ) : (
        <>
          <header className="header">
            <Title level={2} style={{ fontSize: '50px' }}>Structure Stack</Title>
            <h2>Everything & anything about Data Structures & Algorithms</h2>
            <h3 id="load">Linked List, Stacks, Queues, Graphs, Arrays, Hashtable, BST is not available. Will be in the next update...</h3>
            <Statistic title="Active Users" value={userCount} formatter={formatter} />
          </header>
          <div className="content" style={{ display: 'flex', justifyContent: 'center' }}> 
            <Button type="primary" size="large" onClick={onHome} style={{ marginRight: '10px' }}>Start Learning</Button> 
            <Button type="primary" size="large" onClick={onAbout}>About Us</Button> 
          </div>
        </>
      )}
    </div>
  );
};

export default Load;

