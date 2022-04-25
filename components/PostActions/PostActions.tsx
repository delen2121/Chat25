import React from 'react';
import style from "../Post/Post.module.scss";
import {IconButton} from "@material-ui/core";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import UpgradeOutlinedIcon from "@mui/icons-material/UpgradeOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

function PostActions() {
    return (
        <div className={style.iconDown}>
            <ul>
                <li >
                    <IconButton className={style.like}><SentimentVerySatisfiedIcon/></IconButton>
                </li>
                <li> <IconButton>11</IconButton></li>
                <li >
                    <IconButton className={style.disLike}><SentimentVeryDissatisfiedIcon/></IconButton>
                </li>
            </ul>
            <ul>
                <li>  <IconButton><ModeCommentOutlinedIcon/>1</IconButton></li>
                {/*<li>  <IconButton><RepeatOutlinedIcon/></IconButton></li>*/}
                {/*<li>  <IconButton><BookmarkBorderOutlinedIcon/></IconButton></li>*/}
                {/*<li>  <IconButton><UpgradeOutlinedIcon/></IconButton></li>*/}
            </ul>

        </div>
    );
}

export default PostActions;