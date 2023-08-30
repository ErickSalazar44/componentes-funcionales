import { Button, Container, FormControlLabel, FormGroup, Switch, TextField, Typography  } from "@mui/material"
import { useState } from "react"

const FormSingUp = () => {

    const [formValue, setFormValue] = useState({
        nombre: '',
        apellido: '',
        email: '',
        prom: false,
        novedades: false,
    })

    const [errors, setErrors] = useState({
        nombre: {
            error: false,
            minLength: 4,
            message: 'Debe tener al menos 4 caracteres'
        },
        apellido: {
            error: false,
            minLength: 4,
            message: 'Debe tener al menos 4 caracteres'
        },
        email: {
            error: false,
            minLength: 9,
            validator: /^[\w\.-]+@[\w\.-]+\.\w+$/,
            message: 'email incorrecto'
        }
    })

    const handleChangeForm = (fieldName, value) => {
        setFormValue(() => ({
            ...formValue,[fieldName]: value,}
        ));
    };

    const handleSubmitForm = (e) => {
        e.preventDefault()
        console.log(formValue)
    }

    const mostrarMensaje = (fieldName, value) => {

        const reglasValidacion = errors[fieldName]
        if (!reglasValidacion) return 
        
        const {validator, minLength} = reglasValidacion

        let error = false 
        // validacion longitud minima
        if (minLength > value.length) error = true
        // validacion expresion regular email
        if (validator && !validator.test(value)) error = true

        setErrors((prev) => ({
            ...prev,
            [fieldName]: {
                ...prev[fieldName],
                error: error
            }
        }))
    }

    return (
        <Container maxWidth='sm' component='form' onSubmit={handleSubmitForm}>
            <Typography variant="h4" align='center' component='h2'>Registro de Usuarios</Typography>

            <TextField 
                fullWidth
                required
                error={errors.nombre.error}
                helperText={errors.nombre.error && errors.nombre.message} 
                margin={"normal"} 
                id="outlined-basic" 
                label="Nombre" 
                variant="outlined" 
                onChange={(e) => handleChangeForm('nombre', e.target.value)}
                onBlur={(e) => mostrarMensaje('nombre', e.target.value)}
                value={formValue.nombre}
            />

            <TextField 
                fullWidth
                required
                error={errors.apellido.error}
                helperText={errors.apellido.error && errors.apellido.message}  
                margin={"normal"} 
                id="outlined-basic" 
                label="Apellido" variant="outlined"
                onChange={(e) => handleChangeForm('apellido', e.target.value)}
                onBlur={(e) => mostrarMensaje('apellido', e.target.value)}
                value={formValue.apellido} 
            />

            <TextField 
                fullWidth
                required
                type="email"
                error={errors.email.error}
                helperText={errors.email.error && errors.email.message}  
                margin={"normal"} 
                id="outlined-basic" 
                label="Email" variant="outlined"
                onChange={(e) => handleChangeForm('email', e.target.value)}
                onBlur={(e) => mostrarMensaje('email', e.target.value)}
                value={formValue.email} 
            />

            <FormGroup>
                <div style={{ width: "fit-content" }}>
                    <FormControlLabel 
                        control={<Switch checked={formValue.prom} onChange={(e) => handleChangeForm('prom', e.target.checked)}/>}
                        label="Promociones"
                    />
                </div>

                <div style={{ width: "fit-content" }}>
                    <FormControlLabel 
                        control={<Switch checked={formValue.novedades} onChange={(e) => handleChangeForm('novedades', e.target.checked)}/>} 
                        label="Novedades"
                    />
                </div>
            </FormGroup>

            <Button sx={{marginTop: '1em'}} type="submit" variant="contained">Register</Button>
        </Container>
    )
}

export default FormSingUp