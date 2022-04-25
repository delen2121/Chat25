import {Post} from "../../components/Post";
import {MainLayout} from "../../layouts/MainLayout";
import {Divider, Paper, Tab, Tabs, Typography} from "@material-ui/core";
import {FullPost} from "../../components/FullPost";
import CommentPost from "../../components/CommentPosts";
import Comment from "../../components/Comment";
import {PostComments} from "../../components/PostComments";

import data from '../../components/data';
export default function News() {

    return (
        <MainLayout contentFullWidth hideComments hideMenu>
                <FullPost/>
                <PostComments/>
        </MainLayout>




    )
}
