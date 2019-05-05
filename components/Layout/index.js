import PropTypes from 'prop-types';
import { Component } from 'react';
import { Layout, Icon } from 'antd';
const { Header, Content } = Layout;
import Sidebar from './Sidebar';

class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render () {
    return (
      <Layout className='height-100'>
        <Sidebar collapsed={this.state.collapsed}></Sidebar>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className='trigger'
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
          }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default DefaultLayout;

DefaultLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any
};

DefaultLayout.defaultProps = {
  title: '',
  children: null
};
