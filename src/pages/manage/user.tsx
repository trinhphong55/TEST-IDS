import React, { useState, useEffect } from "react";
import { Table, Button, Space, message } from "antd";
import Search from "@/components/Search";
import AddAndEditModal from "@/components/AddAndEditModal";
import DeleteModal from "@/components/DeleteModal";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
const newUid = uuidv4();
interface User {
	id: string;
	username: string;
	role: boolean;
}

const User: React.FC = () => {
	const [data, setData] = useState<User[]>([]);
	const [user, setUser] = useState<any>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [dataSource, setDataSource] = useState<User[]>([]);
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
	const [isModalDelete, setIsModalDelete] = useState<boolean>(false);

	useEffect(() => {
		if (dataSource?.length == 0) {
			getDataAPi();
		}
	}, []);

	//call api
	const getDataAPi = async () => {
		try {
			const response = await axios.get("https://651408878e505cebc2ea954e.mockapi.io/getUser");
			if (response?.statusText == "OK") {
				setDataSource(response.data);
				setData(response.data);
			} else {
				message?.error("error");
			}
		} catch (error) {
			console.error("error:", error);
		}
	};

	//seach data
	const getDataSearch = (value: User, index: number) => {
	
		if (!value?.id && !value?.username && value?.role == null) {
			setDataSource(data);
		} else {
			console.log(value?.role);
			var newSearch = data?.filter((item: User) => {
				if (value?.role != null && !value?.id && !value?.username) {
					console.log("f");
					return item?.role == value?.role;
				}
				if (value?.role != null && value?.id && !value?.username) {
					return item?.role == value?.role && item?.id.includes(value?.id);
				}
				if (value?.role != null && !value?.id && value?.username) {
					return item?.role == value?.role && item?.username.includes(value?.username);
				}
				if (value?.role != null && value?.id && value?.username) {
					return (
						item?.role == value?.role &&
						item?.id.includes(value?.id) &&
						item?.username.includes(value?.username)
					);
				}

				if (value?.role == null && value?.id && !value?.username) {
					return item?.id.includes(value?.id);
				}
				if (value?.role == null && value?.id && value?.username) {
					return item?.id.includes(value?.id) && item?.username.includes(value?.username);
				}
				if (value?.role == null && !value?.id && value?.username) {
					return item?.username.includes(value?.username);
				}
			});
			setDataSource(newSearch);
		}
	};

	//show modal add
	const showModal = () => {
		setUser(null);
		setIsModalVisible(true);
	};

	//show modal edit and send data
	const editUser = (record: User) => {
		setUser(record);
		setIsModalVisible(true);
	};

	//show modal delete
	const deleteUser = (record: User) => {
		setUser(record);
		setIsModalDelete(true);
	};

	//api save and edit
	const handleSave = async (value: User) => {
		if (user == null) {
			try {
				const response = await axios.post("https://651408878e505cebc2ea954e.mockapi.io/getUser", {
					username: value?.username,
					role: value?.role
				});

				if (response?.statusText == "Created") {
					message.success("success");
				} else {
					message?.error("error");
				}
			} catch (error) {
				message.error("error");
				console.error("error:", error);
			}
		} else {
			try {
				const response = await axios.put(`https://651408878e505cebc2ea954e.mockapi.io/getUser/${value.id}`, {
					id: value?.id,
					username: value?.username,
					role: value?.role
				});
				if (response?.statusText == "OK") {
					message.success("success");
				} else {
					message?.error("error");
				}
			} catch (error) {
				message.error("error");
				console.error("error:", error);
			}
		}
		handleCancel();
	};

	// api delete
	const handleDelete = async (value: string) => {
		try {
			const response = await axios.delete(`https://651408878e505cebc2ea954e.mockapi.io/getUser/${value}`);
			if (response?.statusText == "OK") {
				message.success("success");
			} else {
				message?.error("error");
			}
		} catch (error) {
			message.error("error");
			console.error("error:", error);
		}
		handleCancel();
	};

	// close momdal
	const handleCancel = () => {
		getDataAPi();
		setUser(null);
		setIsModalVisible(false);
		setIsModalDelete(false);
	};

	//name col table
	const columns = [
		{
			title: "No",
			dataIndex: "stt",
			key: newUid,
			render: (text: any, record: any, index: any) => <div key={newUid}>{index + 1}</div>
		},
		{
			title: "ID",
			dataIndex: "id",
			render: (text: string, record: User, index: any) => {
				return (
					<div key={index} onClick={() => editUser(record)}>
						{text}
					</div>
				);
			}
		},
		{
			title: "userName",
			dataIndex: "username",
			render: (text: boolean, record: User, index: any) => {
				return (
					<div key={index} onClick={() => editUser(record)}>
						{text}
					</div>
				);
			}
		},
		{
			title: "Role",
			dataIndex: "role",
			render: (text: boolean, record: User, index: any) => {
				return (
					<div key={index} onClick={() => editUser(record)}>
						{text == true ? "Admin" : "Manage"}
					</div>
				);
			}
		},
		{
			title: "",
			render: (text: string, record: User, index: any) => (
				<Space size="middle" key={index}>
					<Button onClick={() => deleteUser(record)}>Delete</Button>
				</Space>
			)
		}
	];

	return (
		<>
			<Search getDataSearch={getDataSearch} />
			<hr></hr>
			<Button onClick={showModal}>addNew</Button>
			<Table dataSource={dataSource} columns={columns} style={{ cursor: "pointer" }} key={newUid} />
			<AddAndEditModal visible={isModalVisible} user={user} onSave={handleSave} onCancel={handleCancel} />
			<DeleteModal showModal={isModalDelete} user={user} onDelete={handleDelete} onCancel={handleCancel} />
		</>
	);
};

export default User;
