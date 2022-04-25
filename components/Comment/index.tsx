import React from 'react';
import {Divider, IconButton, Menu, MenuItem, Paper, Typography} from '@material-ui/core';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import styles from'./Coments.module.scss';

interface CommnetPostProps{
    user:{
        fullName:string;
        avatarUrl:string
    };
    text:string;
    id:number;
    createAt:string;
}


export const  Comment:React.FC<CommnetPostProps>=({user,text,id,createAt})=> {
    const [anchorEl,setAnchorEl]=React.useState(null);
    const handleClick=(event/*: { currentTarget: React.SetStateAction<null>; }*/)=>{
        console.log("LoL")
        setAnchorEl(event.currentTarget);
    }
    const handleClose=()=>{
        setAnchorEl(null);
    };



    return (
        <div className={styles.comment}>
            <div className={styles.userInfo}>
                <img
                    src={user.avatarUrl}
                    alt="Avatar"/>
                <b>{user.fullName}</b>
                <span>{createAt}</span>
            </div>

            <Typography className={styles.text}>
                {text}
            </Typography>


            <span className={styles.replyBtn}>Відповісти</span>
            <IconButton onClick={handleClick}>
                <MoreHorizIcon/>
            </IconButton>
            <Menu id="simple-menu"
                  open={Boolean(anchorEl)}
                  anchorEl={anchorEl}
                  elevation={3}
                  keepMounted
                  onClose={()=>handleClose()}
            >

                <MenuItem onClick={handleClose}>Видалити</MenuItem>
                <MenuItem onClick={handleClose}>Редагувати</MenuItem>

            </Menu>
            <Divider/>
        </div>

    );

}

export default Comment;