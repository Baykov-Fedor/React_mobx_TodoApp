import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  CalendarOutlined,
  StarOutlined,
  SlidersOutlined,
} from "@ant-design/icons";
import TodoPage from "../TodoPage/TodoPage.jsx";
import { AppState } from "../../state/globalState";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class MainPage extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<CalendarOutlined />}>
              My plans
            </Menu.Item>
            <Menu.Item key="2" icon={<StarOutlined />}>
              Important
            </Menu.Item>
            <SubMenu key="sub1" icon={<SlidersOutlined />} title="By status">
              <Menu.Item key="3">Done</Menu.Item>
              <Menu.Item key="4">Undone</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <TodoPage AppState={AppState} />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2021 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default MainPage;
