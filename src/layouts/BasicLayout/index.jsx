import { Layout, Icon } from 'antd';
import React from 'react'
import {SiderMenu} from 'components';
import {Header} from '../Header'

const { Content } = Layout;

export class BasicLayout extends React.Component {
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
          <SiderMenu
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        ></SiderMenu>
        <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: '100vh',boxSizing: 'border-box'
          }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
