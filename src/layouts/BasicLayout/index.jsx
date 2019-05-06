import { Layout, Menu, Icon } from 'antd';
import React from 'react'
import {Header, SiderMenu} from 'components';

const { Content } = Layout;

export default class BasicLayout extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout>
          {/* <SiderMenu
            {...this.props}
          /> */}
        <Layout>
          {/* <Header style={{ background: '#fff', padding: 0 }}>
          </Header>
          <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
          }}
          >
            {this.props.children}
          </Content> */}
        </Layout>
      </Layout>
    );
  }
}
