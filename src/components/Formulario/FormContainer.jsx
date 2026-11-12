import { useState } from "react";
import { FormUI } from "./FormUI";

export const FormContainer = () => {
    const [formData, setFormData] = useState(initalForm())
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updateData = {
            ...formData, [name]: value
        }
    }

    const handleSubmit = (e) => {

    }


    return (
        <div>            <FormUI />

        </div>
    )
}

const initalForm = () => {
    return {
        name: "",
        lastname: "",
        email: "",
        message: ""
    }

}