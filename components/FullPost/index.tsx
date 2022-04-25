import React from 'react';
import {Button, Paper, Typography} from "@material-ui/core";
import style from './FullPost.module.scss';
import PostActions from "../PostActions/PostActions";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import SendIcon from '@mui/icons-material/Send';

export const FullPost: React.FC = () => {
    return (

        <Paper elevation={0} className={style.paper} style={{marginTop: -5}}>

            <div className={style.nav} style={{marginTop: -20,marginBottom:20}}>
                <div className={style.userInfo}>
                    <img
                        src="data:image/jpeg;base64,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"
                        alt=""/>

                    <b>User Name</b>
                    <span>+16521</span>
                </div>
                <div>
                    <Button variant="contained" className='mr-15'>
                        <SendIcon/>

                    </Button>
                    <Button variant="contained">
                        <GroupAddIcon/>
                        <b className='ml-10'>Підписатись</b>
                    </Button>
                </div>
            </div>

            <div className="container">
                <Typography variant="h3">
                    Игра в кальмара Игра в кальмараИгра в кальмара Игра в кальмара Игра в кальмараИгра в кальмара Игра в
                    кальмара Игра в кальмара

                </Typography>
                <div>
                    <Typography variant="h6">
                        Сотни людей, отчаянно нуждающихся в деньгах, получают приглашение участвовать в странных играх.
                        Внутри вас ждет заманчивый приз - игра на выживание со смертельно высокими ставками, на кону
                        которой стоит колоссальный
                        приз в 40 миллионов долларов.
                    </Typography>
                    <Typography>
                        Сотни людей, отчаянно нуждающихся в деньгах, получают приглашение участвовать в странных играх.
                        Внутри вас ждет заманчивый приз - игра на выживание со смертельно высокими ставками, на кону
                        которой стоит колоссальный
                        приз в 40 миллионов долларов.
                    </Typography>
                    <Typography>
                        Сотни людей, отчаянно нуждающихся в деньгах, получают приглашение участвовать в странных играх.
                        Внутри вас ждет заманчивый приз - игра на выживание со смертельно высокими ставками, на кону
                        которой стоит колоссальный
                        приз в 40 миллионов долларов.
                    </Typography>
                </div>
            </div>
            <PostActions/>

        </Paper>

    )
}

export default FullPost;