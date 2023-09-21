import React from 'react';
import Tabs from './Tabs'; // Adjust the import path as needed

function App() {
  const tabsData = [
    {
      title: 'Tab 1',
      content: 'Content for Tab 1'
    },
    {
      title: 'Tab 2',
      content: 'Content for Tab 2'
    },
    {
      title: 'Tab 3',
      content: 'Content for Tab 3'
    }
  ];

  return (
    <div className="App">
      <h1>Tab Component Example</h1>
      <Tabs tabs={tabsData} />
    </div>
  );
}

export default App;
