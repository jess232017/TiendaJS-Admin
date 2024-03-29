import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'

import IconButton from '@mui/material/IconButton '
import Typography from '@mui/material/Typography'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

const Password = ({ startAdornment, label, ...rest }) => {
    const [visible, setVisible] = useState(false)

    const {
        register,
        formState: { errors },
    } = useFormContext()
    const { name, required } = rest

    return (
        <div className='input-style'>
            <Typography component='label' variant='subtitle2' htmlFor={name}>
                {label}
                {required && (
                    <Typography component='span' color='error'>
                        *
                    </Typography>
                )}
            </Typography>
            <div className='relative'>
                <div className='left-icon'>{startAdornment}</div>
                <input
                    {...rest}
                    id={name}
                    type={visible ? 'text' : 'password'}
                    {...register(name, { required })}
                    aria-invalid={errors[name] ? 'true' : 'false'}
                    className={`${startAdornment && 'left-space'}`}
                />
                <IconButton onClick={() => setVisible(!visible)}>
                    {visible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
            </div>
            <Typography variant='subtitle2' color='red' component='span' role='alert'>
                {errors[name]?.message}
            </Typography>
        </div>
    )
}

export default Password
