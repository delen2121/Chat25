import React from 'react';

import styles from './RightComments.module.scss';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import data from '../data';
import Link from"next/link";


interface CommentItemProps {
    id:number;
    createAt:string;
    user: {
        id:number;
        avatarUrl:string;
        fullName: string;

    }
    text: string;
    post: {
        id:number;
        title: string;
    }
}

const CommentItem: React.FC<CommentItemProps> = ({user, text, post}) => {

    return (
        <div className={styles.commentItem}>
            <div className={styles.userInfo}>
                <img
                    src={user.avatarUrl}   alt={"user ava"}  />
                <Link href={`/profile/${user.id}`}>
                    <b>{user.fullName}</b>
                </Link>

            </div>
            <p className={styles.text}>{text}</p>
            <Link href={`/news/${user.id}`}>
                <span className={styles.postTitle}>{post.title}</span>
            </Link>
        </div>

    );
}
export const SideComments = () => {
    const [rightPanel,hideRightPanel]=React.useState(true);
 const toggle=()=>{
     hideRightPanel(!rightPanel);
 }
    return (

        <div className={styles.root}>
            <h3 onClick={toggle} >
                {rightPanel&& "Пости" }    <ArrowLeftIcon className={rightPanel&&styles.rotated}/>
            </h3>
            {rightPanel&&data.comments.popular.map((obj) => (<CommentItem key={obj.id} {...obj}/>


            ))}
        </div>
    );
};