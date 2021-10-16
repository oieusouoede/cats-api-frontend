
import { useState } from "react"
import { Modal, Button, Form, Label } from "semantic-ui-react"
import { useForm } from "react-hook-form"
import { addCat, updateCat } from "../../../api/CatsApiBackend"
import { useMutation, useQueryClient } from "react-query"

function FormModal({ catData }) {

    const queryClient = useQueryClient()

    const createMutation = useMutation((data) =>
        addCat(data),
        {
            onSuccess: () => {
                queryClient.invalidateQueries()
            }
        }
    )

    const updateMutation = useMutation((data) =>
        updateCat(data),
        {
            onSuccess: () => {
                queryClient.invalidateQueries()
            }
        }
    ) 
    
    const {
        register, 
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm()

    var headerText = 'Register new cat'
    var buttonText = 'Add Cat'
    var disabled = false 

    if (!!catData) {
        headerText = 'Update cat'
        buttonText = 'Update'        
        setValue('id', catData.id)
        setValue('name', catData.name)
        setValue('age', catData.age)
        setValue('pastime', catData.pastime)
        disabled = !disabled
    }

    const [open, setOpen] = useState(false)
        
    const submitForm = async (data) => {
        if (!!catData){
            updateMutation.mutate(data)
            setOpen(false)
        } else {
            createMutation.mutate(data)
            reset()
        }
    }

    return (
        <Modal
            dimmer='blurring'
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            size='tiny'
            open={open}
            trigger={
                <Button
                    floated='right'
                    primary
                    size='small'>
                        {buttonText}
                </Button>
            }
        >
            <Modal.Header>{headerText}</Modal.Header>
            <Modal.Content>
                <Form onSubmit={handleSubmit(submitForm)}>
                    <Form.Field error={!!errors.id}>
                        <label>ID</label>
                        <input
                            disabled={disabled}
                            placeholder="Enter the cat's id"
                            type="number"
                            {...register("id", { 
                                required: {value: true, message: "Please, inform an ID number" },
                                min: {value: 0, message: "Invalid number"},
                            })}
                        />
                        {errors.id && (
                            <Label basic color="red" pointing="above">
                                {errors.id.message}
                            </Label>
                        )}
                    </Form.Field>

                    <Form.Field  error={!!errors.name}>
                        <label>Name</label>
                        <input
                            placeholder="Enter the cat's name" 
                            type="text"
                            {...register("name", { 
                                required: { value: true, message: "Please inform the cat's name"},
                                minLength: {value: 2, message: "It must have at least 2 characters"},
                                maxLength: {value: 30, message: "What kind of name is that?"},
                            })}
                        />
                        {errors.name && (
                            <Label basic color="red" pointing="above">
                                {errors.name.message}
                            </Label>
                        )}
                    </Form.Field>

                    <Form.Field  error={!!errors.age}>
                        <label>Age</label>
                        <input
                            placeholder="Enter the cat's age"
                            type="number"
                            min="0" 
                            {...register("age", { 
                                required: {value: true, message: "Please inform the cat's age"}, 
                                min: {value: 0, message: "Invalid age"}, 
                                max: {value: 30, message: "Seriously?"}
                            })}
                        />
                        {errors.age && (
                            <Label basic color="red" pointing="above">
                                {errors.age.message}
                            </Label>
                        )}
                    </Form.Field>

                    <Form.Field  error={!!errors.pastime}>
                        <label>Favourite activity</label>
                        <textarea 
                            placeholder="Write a brief description of the cat's favourite pastime" 
                            rows="2" 
                            {...register("pastime", { 
                                required: {value: true, message: "This field is required"}, 
                                maxLength: {value: 180, message: "Max lenght is 180 characters"},
                            })}
                        />
                        {errors.pastime && (
                            <Label basic color="red" pointing="above">
                                {errors.pastime.message}
                            </Label>
                        )}
                    </Form.Field>

                    <Button type="submit">Submit</Button>
                    <Button type="button" color='red' onClick={() => setOpen(false)}>
                    Cancel
                    </Button>
                </Form>
            </Modal.Content>

        </Modal>
    )
}

export default FormModal