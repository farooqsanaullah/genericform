import React, { useState,useEffect } from 'react'
import CreateForm from './CreateForm'
import {ValidatorForm} from "react-material-ui-form-validator"
function FormParameter() {

    useEffect(() => {
        ValidatorForm.addValidationRule('isMatchPassword', (value) => {
            if (value !== form.password) {
                return false;
            }
            return true;
        });
    })

    const [spinner, setSpinner] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [form, setForm] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    let formParameters = [
        {
            label: "Enter the username",
            name: 'username',
            value: form.username,
            disabled: false,
            validators: ["required", 'minStringLength:3', 'maxStringLength:15'],
            errorMessages: ["This is field required", "3 minimum charater", "15 maximum charater"],
            variant: "outlined",
            size: "small",
            type: "text"
        },
        {
            label: "Enter the first name",
            name: 'firstName',
            value: form.firstName,
            disabled: false,

            validators: ["required", 'minStringLength:3', 'maxStringLength:15'],
            errorMessages: ["This is field required", "3 minimum charater", "15 maximum charater"],
            variant: "outlined",
            size: "small",
            type: "text"
        },
        {
            label: "Enter the last name",
            name: 'lastName',
            value: form.lastName,
            disabled: false,
            validators: ["required", 'minStringLength:3', 'maxStringLength:15'],
            errorMessages: ["This is field required", "3 minimum charater", "15 maximum charater"],
            variant: "outlined",
            size: "small",
            type: "text"
        },
        {
            label: "Enter the email",
            name: 'email',
            value: form.email,
            disabled: false,
            validators: ["required", "isEmail"],
            errorMessages: ["This is field required", "Enter vaild email address"],
            variant: "outlined",
            size: "small",
            type: "text"
        },
        {
            label: "Enter the password",
            name: 'password',
            value: form.password,
            disabled: false,
            validators: ['required', 'minStringLength:6', 'maxStringLength:15'],
            errorMessages: ["This is field required", "6 minimum charater", "15 maximum charater"],
            variant: "outlined",
            size: "small",
            type: "password"
        },
        {
            label: "Enter the confirm password",
            name: 'confirmPassword',
            value: form.confirmPassword,
            disabled: false,
            validators: ['isMatchPassword', 'required', 'minStringLength:6', 'maxStringLength:15'],
            errorMessages: ["password is not match", "This is field required", "6 minimum charater", "15 maximum charater"],
            variant: "outlined",
            size: "small",
            type: "password",

        }

    ]

    const onSubmit = () => {
        setSpinner(true)
        setDisabled(true)
        console.log(form)

    }

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })

    }

    const BackToComponent = () => {
        console.log("calling back to component ")
    }



    return (
        <CreateForm 
        params={formParameters} Submit={onSubmit} 
        Change={handleChange} 
        spinner={spinner} 
        disabled={disabled} 
        columnNumber={4}
        formName={"Add User"} 
        BackToComponent={BackToComponent} />
    )
}

export default FormParameter
