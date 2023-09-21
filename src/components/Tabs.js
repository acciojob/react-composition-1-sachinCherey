import React, { Component } from 'react';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0 // Initially set the active tab to the first tab
    };
  }

  // Function to handle tab click
  handleTabClick = (index) => {
    this.setState({
      activeTab: index
    });
  }

  render() {
    const { tabs } = this.props;
    const { activeTab } = this.state;

    return (
      <div>
        <div className="tab-list">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`tab ${activeTab === index ? 'active' : ''}`}
              onClick={() => this.handleTabClick(index)}
            >
              {tab.title}
            </div>
          ))}
        </div>
        <div className="tab-content">
          {tabs[activeTab].content}
        </div>
      </div>
    );
  }
}

export default Tabs;
