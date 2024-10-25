import React, { useState } from 'react';
import styled from 'styled-components';
import {tabs} from './data/menuData';

const TabContainer = styled.div`
    padding: 0px 24px;
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  height: 60px;
`;

const TabItem = styled.div`
  padding: 18px 20px;
  cursor: pointer;
  border-bottom: 2px solid ${props => props.active ? '#1a73e8' : 'transparent'};
  color: ${props => props.active ? '#1a73e8' : '#000'};
  font-weight: ${props => props.active ? 'bold' : 'normal'};
`;

const Count = styled.span`
  background-color: #e0e0e0;
  border-radius: 10px;
  padding: 2px 6px;
  font-size: 0.8em;
  margin-left: 5px;
`;

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);
  return (
    <TabContainer>
      {tabs.map((tab) => (
        <TabItem
          key={tab.name}
          active={activeTab === tab.name}
          onClick={() => setActiveTab(tab.name)}
        >
          {tab.name} <Count>{tab.count.toString().padStart(2, '0')}</Count>
        </TabItem>
      ))}
    </TabContainer>
  );
};

export default Tabs;