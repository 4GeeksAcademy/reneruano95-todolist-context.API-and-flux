import React, { useContext, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

import { TaskContext } from "../store/AppContext";
import { VerticallyCenteredModal } from "./VerticallyCenteredModal";


const AddItem = () => {
    const { taskActions } = useContext(TaskContext);

    const [modal, setModal] = useState(false)
    const [modalShow, setModalShow] = useState(false);

    const handleOnShowModal = () => [
        setModalShow((prev) => prev = true)
    ]

    const handleAddTask = (e) => {
        e.preventDefault();

        let textbox = e.target.elements.task;
        if (textbox.value.trim() !== '') {
            setModal((prev) => prev = false)

            taskActions({ type: "add", payload: textbox.value });
        }
        if (textbox.value.trim() === '') {
            setModal((prev) => prev = true)
        }
        textbox.value = "";
    }

    return (
        <>
            <form onSubmit={handleAddTask}>
                <InputGroup className="mb-3" >
                    <Form.Control
                        name="task"
                        placeholder="What's need to be done?"
                        aria-label="What's need to be done?"
                    />
                    <Button
                        variant="outline-secondary"
                        type="submit"
                        role="button"
                        onClick={modal ? handleOnShowModal : undefined} >
                        Add
                    </Button>
                </InputGroup >
            </form >
            {modal && <VerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />}
        </>

    )
}

export default AddItem

