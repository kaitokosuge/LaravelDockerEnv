import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import TimeLine from "@/Components/TimeLine";
import CreatePost from "@/Pages/Post/CreatePost";
import { Avatar, Paper, Container, Card, Typography, Box, Button, ImageList, ImageListItem, TextField, Select, MenuItem, FormControl, InputLabel} from '@mui/material';

const Home = (props) => {
    const { posts, categories } = props;
    
    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    ホーム
                </h2>
            }>
            
            <Box sx={{ display: 'flex' }}>
                <TimeLine posts={ posts }/>
                <CreatePost categories={ categories } auth={ props.auth }/>
            </Box>
            
        </Authenticated>
    );
}

export default Home;