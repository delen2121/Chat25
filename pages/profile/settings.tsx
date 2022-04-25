import {MainLayout} from "../../layouts/MainLayout";
import {Divider, Input, Paper, Typography,Button} from "@material-ui/core";
import TextField from '@mui/material/TextField';

export default function Settings() {
    return (

        <MainLayout hideComments hideMenu>
            <Paper className='p-20' elevation={0}>
                <Typography variant='h6'> Основні налаштування</Typography>
                <Divider className='mt-10 mb-15'/>
                <form action="" className=''>
                    <TextField id="outlined-size-small" className='mb-15' required size="small" variant='outlined' label='Нік' fullWidth/>

                    <TextField className='mb-15'
                               id="outlined-size-small"
                               size="small"
                               required
                               label="Ел. пошта"
                               fullWidth
                    />
                    <TextField
                        id="outlined-size-small"
                        size="small"
                        required
                        label="Пароль"
                        fullWidth
                    />
                    <Divider className='mt-20 mb-20'/>
                    <Button color='primary' variant='contained'>Зберегти зміни</Button>
                </form>
            </Paper>
        </MainLayout>

    )
}
