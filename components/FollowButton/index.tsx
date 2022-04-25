import React from 'react';
import {Button} from "@material-ui/core";

import style from './FollowButton.module.scss';
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from '@mui/icons-material/Check';

export const FollowButton: React.FC = () => {
  const [followed,setFollowed]=React.useState(false);

    return (

        <Button
            onClick={()=>{setFollowed(!followed)}}
            variant="contained" style={{minWidth:25,width:30}}>
          {!followed?<AddIcon/>:<CheckIcon style={{color:"green"}}/>}

        </Button>

    );
}