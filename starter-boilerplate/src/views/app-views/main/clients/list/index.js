import React, { Component } from "react";
import {
  Card,
  Table,
  message,
} from "antd";
import AvatarStatus from "components/shared-components/AvatarStatus";
import Loading from "components/shared-components/Loading";

export class ClientList extends Component {
  state = {
    users: [],
    userProfileVisible: false,
    selectedUser: 0,
    loading: false,
  };

  deleteUser = (userId) => {
    this.setState({
      users: this.state.users.filter((item) => item.id !== userId),
    });
    message.success({ content: `Deleted user ${userId}`, duration: 2 });
  };

  showUserProfile = (userInfo) => {
    this.setState({
      userProfileVisible: true,
      selectedUser: userInfo,
    });
  };

  getData() {
    this.setState({
      loading: true,
    });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        this.setState({
          loading: false,
          users: json,
        });
      });
  }

  componentDidMount() {
    this.getData();
  }

  closeUserProfile = () => {
    this.setState({
      userProfileVisible: false,
      selectedUser: 0,
    });
  };

  gotoProfile = (index) => {
    const { match, history } = this.props;
    const { users } = this.state;
    localStorage.setItem("data", JSON.stringify(users[index]));
    let url = match.url;
    url = (url.slice(-1)=="/")?(url):(url+"/");
    history.push(`${url}${index}`);
  };

  render() {
    const { users, loading } = this.state;

    const tableColumns = [
      {
        title: "ID",
        dataIndex: "id",
        sorter: {
          compare: (a, b) => a.id - b.id,
        },
      },
      {
        title: "User",
        dataIndex: "name",
        render: (_, record) => (
          <div className="d-flex">
            <AvatarStatus
              // src={record.img}
              name={record.name}
              subTitle={record.email}
            />
          </div>
        ),
        sorter: {
          compare: (a, b) => {
            a = a.name.toLowerCase();
            b = b.name.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },
      {
        title: "UserName",
        dataIndex: "username",
        sorter: {
          compare: (a, b) => {
            a = a.username.toLowerCase();
            b = b.username.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },
      {
        title: "Phone",
        dataIndex: "phone",
        // sorter: {
        //   compare: (a, b) => a.phone - b.phone,
        // },
      },
      {
        title: "Website",
        dataIndex: "website",
        sorter: {
          compare: (a, b) => {
            a = a.website.toLowerCase();
            b = b.website.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },
    ];
    return (
      <Card bodyStyle={{ padding: "0px" }}>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Table
              columns={tableColumns}
              dataSource={users}
              rowKey="id"
              onRow={(record, rowIndex) => {
                return {
                  onClick: (e) => {
                    e.preventDefault();
                    // console.log(users[rowIndex]);
                    this.gotoProfile(rowIndex);
                  },
                };
              }}
            />
          </>
        )}
      </Card>
    );
  }
}

export default ClientList;
