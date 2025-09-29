import React from "react";
import { Modal, Form, Input, Button, InputNumber, DatePicker } from "antd";
import dayjs from "dayjs";

const RoomForm = ({ open, onClose, onSave }) => {
    const [form] = Form.useForm();

    const handleSubmit = () => {
        form
            .validateFields()
            .then((values) => {
                onSave({
                    ...values,
                    EntryDate: values.EntryDate
                        ? values.EntryDate.format("YYYY-MM-DD")
                        : dayjs().format("YYYY-MM-DD"),
                });
                form.resetFields();
                onClose();
            })
            .catch(() => {});
    };

    return (
        <Modal
            title="Add New Room"
            open={open}
            onCancel={onClose}
            footer={[
                <Button key="cancel" onClick={onClose}>
                    Cancel
                </Button>,
                <Button key="save" type="primary" onClick={handleSubmit}>
                    Save
                </Button>,
            ]}
        >
            <Form form={form} layout="vertical" initialValues={{ RoomStatus: 1 }}>
                <Form.Item
                    name="RoomAlise"
                    label="Room Alias"
                    rules={[{ required: true, message: "Please enter alias" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="RoomName"
                    label="Room Name"
                    rules={[{ required: true, message: "Please enter name" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item name="RoomTypeId" label="Room Type ID">
                    <InputNumber style={{ width: "100%" }} />
                </Form.Item>

                <Form.Item name="RFloorId" label="Floor ID">
                    <InputNumber style={{ width: "100%" }} />
                </Form.Item>

                <Form.Item name="RoomStatus" label="Room Status">
                    <InputNumber style={{ width: "100%" }} />
                </Form.Item>

                <Form.Item name="DisplayIndex" label="Display Index">
                    <InputNumber style={{ width: "100%" }} />
                </Form.Item>

                <Form.Item name="Discription" label="Description">
                    <Input.TextArea rows={3} />
                </Form.Item>

                <Form.Item name="EntryDate" label="Entry Date">
                    <DatePicker style={{ width: "100%" }} />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default RoomForm;
