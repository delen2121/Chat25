import Head from 'next/head'
import {Paper} from "@mui/material";
import {Header} from "../components/Header";
import {Typography} from "@material-ui/core";
import Image from 'next/image';
import {Post} from "../components/Post";
import {LeftMenu} from "../components/LeftMenu";
import {MainLayout} from "../layouts/MainLayout";

export default function Messages() {

    return (
        <MainLayout>
            <h1>Повідомлення</h1>
        </MainLayout>




    )
}
