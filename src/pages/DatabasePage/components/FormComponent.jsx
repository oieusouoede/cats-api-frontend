import { useForm } from "react-hook-form"
import { useCatStore } from "../../../storage/cat"
import { Button, Form, Label } from "semantic-ui-react"

function RegisterForm ({setFalse}) {
    const addCat = useCatStore((state) => state.addCat)
    
    const {
        register, 
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    
    const submitForm = (data) => {
        console.log(data)
        addCat(data)
        reset()
    }

    return (

        <Form onSubmit={handleSubmit(submitForm)}>

            <Form.Field error={!!errors.id}>
                <label>ID</label>
                <input
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
            <Button type="button" color='red' onClick={setFalse}>
            Cancel
            </Button>
        </Form>

    )
}

export default RegisterForm