import React from "react";
import {Divider, Paper, Tab, Tabs, Typography} from "@material-ui/core";
import Comment from "../Comment";
import {CommentFromS} from "../CommentFrom";
import data from '../data';
// type CommetObj={
//     text:string;
//     id:number;
//     createAt:string;
//     user:{
//         fullName:string;
//         avatarUrl:string;
//     }
// }
//
// interface PostCommentsProps{
//     items:CommetObj[];
// }

export const   PostComments : React.FC=()=>{
const[acitveCategory,setActiveCategory]=React.useState(0);

const handleChange=(e,newValue)=> {
    setActiveCategory(newValue);



}
const info=data.comments[acitveCategory===0?'popular':'fresh'];

    return(
    <Paper elevation={0} className='mt-40 p-30'>
        <Typography variant="h6" className='mb-20'>
            <small>43</small> коментарів
        </Typography>

        <Tabs onChange={handleChange} className="mt-20" value={acitveCategory} indicatorColor="primary" textColor="primary">
            <Tab label="Популярні"  />
            <Tab label="По алфавіту"  />

        </Tabs>
        <Divider/>
        <CommentFromS/>
        <Divider/>
        <div className="mb-20 mt-20">
            {info.map((item)=><Comment key={item.id} user={item.user} text={item.text} id={item.id} createAt={item.createAt}/>)}



        </div>
        {/*<Comment   user={{fullname:"sd;lkfj sdlkfjsdlfkj"}} text={"klfsjdflksdjfdsl lkj"}/>*/}
    </Paper>
    )
}