import React from "react";
import { Modal, Button, Icon } from "semantic-ui-react";
import RegisterForm from "../pages/DatabasePage/components/FormComponent";

function FormModal() {
    const [open, setOpen] = React.useState(false)

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            size='tiny'
            //dimmer='blurring'
            open={open}
            trigger={
                <Button
                    floated='right'
                    icon
                    labelPosition='left'
                    primary
                    size='small'>
                    <Icon name='plus square'/> Add Cat
                </Button>
            }
        >
            <Modal.Header>Register new cat</Modal.Header>
            <Modal.Content>
                <RegisterForm setFalse={() => setOpen(false)}/>
            </Modal.Content>

        </Modal>
    )

}

export default FormModal