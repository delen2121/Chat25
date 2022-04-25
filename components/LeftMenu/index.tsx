import React from 'react';
import Link from 'next/link';

import style from './LeftMenu.module.scss';
import {Button} from '@material-ui/core';


import LocalFireDepartmentSharpIcon from '@mui/icons-material/LocalFireDepartmentSharp';
import ChatIcon from '@mui/icons-material/Chat';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import {useRouter} from "next/router";

const menu=[
    {text:'Новини',icon:<LocalFireDepartmentSharpIcon/>,path:'/'},
    {text:'Повідомлення',icon:<ChatIcon/>,path:'/messages'},
    {text:'Рейтинг DL',icon:<TrendingUpIcon/>,path:'/rating'},
    {text:'Підпискі',icon:<SubscriptionsIcon/>,path:'/follows'}

]


export const LeftMenu: React.FC = () => {
   const router =useRouter();

    return (
        <div className={style.menu}>
            <ul>
                {menu.map((obj)=>(
                    <li key={obj.path}>
                        <Link href={obj.path}>
                          <Button variant={router.asPath===obj.path?"contained":"text"}>{obj.icon}{obj.text}</Button>

                        </Link>
                    </li>
                ))}


            </ul>
        </div>
    );
}