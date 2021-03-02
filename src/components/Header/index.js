import { Layout, Menu } from 'antd';
import { tabs } from '../../shared/constains';
import './style.scss';

const { Header } = Layout;

const CustomHeader = () => {
  const defaultSelectedKeys = tabs.find(i => i.isActive).id;

  return (
    <Header theme="light">
      <div className="logo" />
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={[defaultSelectedKeys]}>
        {tabs.map(i => <Menu.Item key={i.id} disabled={!i.isActive}>{i.name}</Menu.Item>)}
      </Menu>
    </Header>
  )
};

export default CustomHeader;