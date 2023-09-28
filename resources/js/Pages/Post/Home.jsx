import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Header from "@/Layouts/Header";
import TimeLine from "@/Components/TimeLine";
import CreatePost from "@/Pages/Post/CreatePost";
import { Avatar, Paper, Container, Card, Typography, Box, Button, ImageList, ImageListItem, TextField, Select, MenuItem, FormControl, InputLabel} from '@mui/material';

const Home = (props) => {
    const { posts, categories } = props;
    
    return (
        <Header auth={props.auth} header="ホーム">
            
            <Box sx={{ display: 'flex' }}>
                <TimeLine posts={ posts }/>
                <CreatePost categories={ categories } auth={ props.auth }/>
            </Box>
            
        </Header>
    );
}

export default Home;