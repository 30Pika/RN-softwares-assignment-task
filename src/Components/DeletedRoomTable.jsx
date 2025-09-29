import React from "react";
import { Table, Button } from "antd";

const DeletedRoomTable = ({ rooms, onActivate }) => {
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
                <Button type="primary" onClick={() => onActivate(record)}>
                    Activate
                </Button>
            ),
        },
    ];

    return (
        <Table
            rowKey="RoomID"
            dataSource={rooms}
            columns={columns}
            pagination={false}
        />
    );
};

export default DeletedRoomTable;
