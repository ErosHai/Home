import './App.css'
import React, { useState, useContext, useEffect } from 'react'
import {
	Space,
	Table,
	Input,
	Tag,
	Button,
	Drawer,
	Descriptions,
	Tabs,
} from 'antd'
import Form from './Form'

function App() {
	const [visible, setVisible] = useState(false)
	const [input, setInput] = useState('')
	const [arr, setArr] = useState([
		{
			id: 1,
			name: 'zhangsan',
		},
		{
			id: 2,
			name: 'lisi',
		},
	])

	// const context = useContext(Context)
	// console.log(context)

	// 浅拷贝
	// const arrSlice = arr

	// 深拷贝
	// const arrSlice = arr.slice(0)
	// const arrSlice = [...arr]

	useEffect(() => {}, [])

	const { TabPane } = Tabs

	const showDrawer = record => {
		setVisible(true)
		console.log(record)
	}

	function onClose() {
		setVisible(false)
	}

	function inputChange({ target: { value } }) {
		setInput(value)
		console.log(value)

		const newArr = [...arr]

		newArr.map(item => {
			if (item.id == 1) {
				item.name = input
			}
		})
		setArr(newArr)
		console.log(newArr)
	}

	console.log(arr)
	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			render: text => <a href='www'>{text}</a>,
		},
		Table.EXPAND_COLUMN,
		{
			title: 'Age',
			dataIndex: 'age',
			key: 'age',
		},
		// Table.SELECTION_COLUMN,
		{
			title: 'Address',
			dataIndex: 'address',
			key: 'address',
		},
		{
			title: 'Tags',
			key: 'tags',
			dataIndex: 'tags',
			render: (_, { tags }) => (
				<>
					{tags.map(tag => {
						let color = tag.length > 5 ? 'geekblue' : 'green'

						if (tag === 'loser') {
							color = 'volcano'
						}

						return (
							<Tag color={color} key={tag}>
								{tag.toUpperCase()}
							</Tag>
						)
					})}
				</>
			),
		},
		{
			title: 'Action',
			key: 'action',
			render: (_, record) => (
				<Space size='middle'>
					<a href='www'>Invite {record.name}</a>
					<a href='www'>Delete</a>
					<Button
						type='primary'
						onClick={() => {
							showDrawer(record)
						}}
					>
						Open
					</Button>
					<Drawer
						closeable='true'
						size='large'
						key={record.key}
						title='Basic Drawer'
						destroyOnClose
						placement='right'
						onClose={onClose}
						visible={visible}
					>
						<Descriptions
							key={record.key}
							size='middle'
							title='user info'
							bordered
						>
							<Descriptions.Item label='key'>{record.key}</Descriptions.Item>
							<Descriptions.Item label='name'>{record.name}</Descriptions.Item>
							<Descriptions.Item label='age'>{record.age}</Descriptions.Item>
							<Descriptions.Item label='address'>
								{record.address}
							</Descriptions.Item>
							<Descriptions.Item label='tags'>{record.tags}</Descriptions.Item>
						</Descriptions>
					</Drawer>
				</Space>
			),
		},
	]
	const data = [
		{
			key: '1',
			name: 'John Brown',
			age: 32,
			address: 'New York No. 1 Lake Park',
			tags: ['nice', 'developer'],
		},

		{
			key: '2',
			name: 'Jim Green',
			age: 42,
			address: 'London No. 1 Lake Park',
			tags: ['loser'],
		},
		{
			key: '3',
			name: 'Joe Black',
			age: 32,
			address: 'Sidney No. 1 Lake Park',
			tags: ['cool', 'teacher'],
		},
	]

	const tabOnChange = key => {
		console.log(key, 'key')
	}

	const teb = (
		<Tabs type='card' centered defaultActiveKey='1' onChange={tabOnChange}>
			<TabPane tab='Tab 1' key='1'>
				<h1>Content of Tab Pane 1</h1>
			</TabPane>
			<TabPane tab='Tab 2' key='2'>
				<h1>Content of Tab Pane 2</h1>
			</TabPane>
			<TabPane tab='Tab 3' key='3'>
				<h1>Content of Tab Pane 3</h1>
			</TabPane>
		</Tabs>
	)

	return (
		<div className='App'>
			<Table
				columns={columns}
				dataSource={data}
				expandable={{
					expandedRowRender: record => <p>{record.name}</p>,
					rowExpandable: record => record.age >= '30',
				}}
			></Table>
			<Form />
			{teb}
			<Input type='text' onChange={inputChange}></Input>
			{arr && arr.map((item, index) => <h2 key={index}>{item.name}</h2>)}
		</div>
	)
}

export default App
