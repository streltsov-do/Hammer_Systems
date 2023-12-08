import React, { Component, createRef } from "react";
import { Form, Avatar, Button, Input, Row, Col, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { ROW_GUTTER } from "constants/ThemeConstant";
import Flex from "components/shared-components/Flex";
import Loading from "components/shared-components/Loading";

export class UserEdit extends Component {
  state = { data: {}, loading: false };
  formRef = createRef();

  componentDidMount() {
    let data = localStorage.getItem("data");
    data = JSON.parse(data);
    this.setState({ data: data });
    this.formRef.current?.setFieldsValue({
      id: data.id,
      name: data.name,
      email: data.email,
      username: data.username,
      phone: data.phone,
      website: data.website,
      address:
        data.address.city +
        ", " +
        data.address.street +
        ", " +
        data.address.suite,
      zipcode: data.address.zipcode,
      company: data.company.name,
    });
  }

  render() {
    const { data, loading } = this.state;

    const onFinish = (values) => {
      const key = "updatable";
      const { match, history } = this.props;
      this.setState({
        loading: true,
      });

      const newData = {
        id: data.id,
        name: values.name,
        email: values.email,
        username: values.username,
        phone: values.phone,
        website: values.website,
        address: values.adress,
        company: values.company,
      };

      setTimeout(() => {
        this.setState({
          loading: false,
        });
        message.success({ content: "Done!", key, duration: 2 });

        fetch("https://jsonplaceholder.typicode.com/posts/"+data.id, {
          method: "PUT",
          body: JSON.stringify(newData),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((json) => console.log("updated data", json));

        let url = match.url;
        url = url.slice(0, url.length - (1 + (data.id - 1 + "").length));
        history.push(`${url}`);
      }, 1000);
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

    return (
      <>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Flex
              alignItems="center"
              mobileFlex={false}
              className="text-center text-md-left"
            >
              <Avatar size={90} src={""} icon={<UserOutlined />} />
              <h1 className="ml-md-3 mt-md-0 mt-3">User ID: {data?.id}</h1>
            </Flex>
            <div className="mt-4">
              <Form
                ref={this.formRef}
                name="basicInformation"
                layout="vertical"
                initialValues={{
                  id: data.id,
                  name: data.name,
                  email: data.email,
                  username: data.username,
                  phone: data.phone,
                  website: data.website,
                  address: data.adress,
                  company: data.company,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                onSubmit={this.handleSubmit}
              >
                <Row>
                  <Col xs={24} sm={24} md={24} lg={16}>
                    <Row gutter={ROW_GUTTER}>
                      <Col xs={24} sm={24} md={12}>
                        <Form.Item
                          label="Name"
                          name="name"
                          rules={[
                            {
                              required: true,
                              message: "Please input your name!",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12}>
                        <Form.Item
                          label="Username"
                          name="username"
                          rules={[
                            {
                              required: true,
                              message: "Please input your username!",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12}>
                        <Form.Item
                          label="Email"
                          name="email"
                          rules={[
                            {
                              required: true,
                              type: "email",
                              message: "Please enter a valid email!",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12}>
                        <Form.Item label="Phone Number" name="phone">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12}>
                        <Form.Item label="Website" name="website">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={24}>
                        <Form.Item label="Address" name="address">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={24}>
                        <Form.Item label="Zipcode" name="zipcode">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={24}>
                        <Form.Item label="Company" name="company">
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Button type="primary" htmlType="submit">
                      Save Change
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </>
        )}
      </>
    );
  }
}

export default UserEdit;
