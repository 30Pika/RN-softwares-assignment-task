import React from "react";
import { Table, Button, Popconfirm } from "antd";

const RoomTable = ({ rooms, loading, onDelete }) => {
    const columns = [
        { title: "RoomID", dataIndex: "RoomID", key: "RoomID" },
        { title: "RoomAlise", dataIndex: "RoomAlise", key: "RoomAlise" },
        { title: "RoomName", dataIndex: "RoomName", key: "RoomName" },
        { title: "RoomTypeId", dataIndex: "RoomTypeId", key: "RoomTypeId" },
        { title: "RFloorId", dataIndex: "RFloorId", key: "RFloorId" },
        { title: "DisplayIndex", dataIndex: "DisplayIndex", key: "DisplayIndex" },
        { title: "Discription", dataIndex: "Discription", key: "Discription" },
        {
            title: "Actions",
            key: "actions",
            render: (_, record) => (
                <Popconfirm
                    title="Are you sure to delete this room?"
                    onConfirm={() => onDelete(record)}
                >
                    <Button danger>Delete</Button>
                </Popconfirm>
            ),
        },
    ];

    return (
        <Table
            rowKey="RoomID"
            dataSource={rooms}
            columns={columns}
            loading={loading}
            pagination={false}
        />
    );
};

export default RoomTable;
