import { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Sider } = Layout;

class Sidebar extends Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Sider
        trigger={null}
        width={256}
        collapsible
        collapsed={this.props.collapsed}
        style={{ background: '#001529', height: '100%' }}
      >
        <div className='logo'>
          <p className='logo-txt'>目邻保险服务</p>
        </div>
        <style jsx>{`
          .logo {
            background: #001529;
            padding: 16px;
          }
          .logo-txt{
            text-align: center;
            color: #c2c2c2;
            font-size: 18px;
            margin-bottom: 0;
          }
        `}</style>
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
        >
          <SubMenu key='sub1' title={<span><Icon type='user' />订单保单</span>}>
            <Menu.Item key='1'>
              <Link href='/order/list'>
                <span>全部订单</span>
              </Link>
            </Menu.Item>
            <Menu.Item key='2'>
              <Link href='/user/userList'>
                <span>全部保单</span>
              </Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key='sub2' title={<span><Icon type='laptop' />subnav 2</span>}>
            <Menu.Item key='5'>option5</Menu.Item>
            <Menu.Item key='6'>option6</Menu.Item>
            <Menu.Item key='7'>option7</Menu.Item>
            <Menu.Item key='8'>option8</Menu.Item>
          </SubMenu>
          <SubMenu key='sub3' title={<span><Icon type='notification' />subnav 3</span>}>
            <Menu.Item key='9'>option9</Menu.Item>
            <Menu.Item key='10'>option10</Menu.Item>
            <Menu.Item key='11'>option11</Menu.Item>
            <Menu.Item key='12'>option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}

Sidebar.propTypes = {
  collapsed: PropTypes.bool
};

Sidebar.defaultProps = {
  collapsed: true
};

export default Sidebar;