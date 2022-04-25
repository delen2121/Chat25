import React from 'react';
import {IconButton,Menu,MenuItem,Paper,Typography}from '@material-ui/core';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import styles from'./ComentsPost.module.scss';

interface CommnetPostProps{
    user:{
        fullname:string;
    };
    text:string;
    post:{
        title:string;
    };
}


export const  CommentPost:React.FC<CommnetPostProps>=({user,post,text})=> {
    const [anchorEl,setAnchorEl]=React.useState(null);
    const handleClick=(event: { currentTarget: React.SetStateAction<null>; })=>{
        setAnchorEl(event.currentTarget);
    }
    const handleClose=()=>{
        setAnchorEl(null);
    };



    return (
        <Paper elevation={0} className='p-20' classes={{root:styles.paper}}>
            <Typography variant='h6' className={styles.title}>
                <a href="#">{post.title}</a>
                <IconButton onClick={()=>{handleClick}} >
                    <MoreVertIcon/>
                </IconButton>


            </Typography>
            <Typography className="mt-10 mb-15">{text}</Typography>
            <Menu id="simple-menu"
                  open={Boolean(anchorEl)}
                  anchorEl={anchorEl}
                  elevation={3}
                  keepMounted
                  onClose={handleClose}
            >

                <MenuItem onClick={handleClose}>Delete</MenuItem>
                <MenuItem onClick={handleClose}>Redact</MenuItem>

            </Menu>
        </Paper>
    );
}

export default CommentPost;