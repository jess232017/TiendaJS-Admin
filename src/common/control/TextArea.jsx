import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import Typography from '@mui/material/Typography'
import TextareaAutosize from '@mui/material/TextareaAutosize'

const TextArea = ({ label, ...rest }) => {
    const {
        control,
        formState: { errors },
    } = useFormContext()
    const { name } = rest

    return (
        <div className='input-style'>
            <Typography component='label' variant='subtitle2' htmlFor={name}>
                {label}
                {rest.required && (
                    <Typography component='span' color='error'>
                        *
                    </Typography>
                )}
            </Typography>
            <Controller
                name={name}
                control={control}
                render={({ field }) => <TextareaAutosize {...rest} {...field} name={name} />}
            />
            <Typography variant='subtitle2' color='red' component='span' role='alert'>
                {errors[name]?.message || errors[name]?.value?.message || errors[name]?.label?.message}
            </Typography>
        </div>
    )
}

export default TextArea
