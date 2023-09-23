import React, {useState} from "react";
import { useForm } from '@inertiajs/react';
import { Card, List, ListItem, ListItemButton, ListItemText, Box, Button, IconButton, Typography, Paper, InputBase } from '@mui/material';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import SearchIcon from '@mui/icons-material/Search';
import 'whatwg-fetch'


const getCsrfToken = () => {
    const metas = document.getElementsByTagName('meta');
    for (let meta of metas) {
        if (meta.getAttribute('name') === 'csrf-token') {
            console.log(meta.getAttribute('content'));
            return meta.getAttribute('content');
        }
    }
    return '';
}

const FollowCategories = (props) => {
    const { categories, user } = props;
    const followingCategories = [];
    user.categories.forEach(category => {
       followingCategories.push(category.id); 
    });
    console.log(followingCategories);
    
    const {data, setData, post} = useForm({
        user_id: user.id,
        category_id: 0,
    })
    
    const [ searchTerm, setSearchTerm ] = useState("");
    console.log(searchTerm);
    const searchCategories = (e) => {
        e.preventDefault();
        const categoryOptions = document.querySelectorAll('.category-option');
        categoryOptions.forEach(category => {
            if(category.textContent.toLowerCase().includes(searchTerm)) {
                category.style.display = 'flex'; // Matched shop names are displayed
            } else {
                category.style.display = 'none'; // Non-matching shop names are hidden
            }
        })
    }
    
    console.log("a");
    console.log(data);
    
    const handleSendData = (e) => {
        console.log("b");
        e.preventDefault();
        setData("category_id", e.target.value)
        post(route("follow.category"));
    }
    
    const followCategory = (e) => {
        window.fetch(route("follow.category"), {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': getCsrfToken()
            },
                body: JSON.stringify({
                    category_id: e.target.value,
            })
        })
    }
    
    return (
        <Card sx={{ p: 2, m:1, width: 500}}>
            <Typography variant="h5">カテゴリーのフォロー</Typography>
            <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
                onSubmit={searchCategories}>
                <InputBase
                    fullWidth
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="作品カテゴリーを検索"
                    inputProps={{ 'aria-label': 'search categories' }}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <IconButton type="submit">
                    <SearchIcon/>
                </IconButton>
            </Paper>
            <Box component="form" onSubmit={handleSendData}>
                <List>
                    { categories.map((category) => (
                        followingCategories.includes(category.id) ? (
                            <div></div>
                        ) : (
                            <ListItem sx={{ display:'none' }} disablePadding className="category-option">
                                <IconButton 
                                    sx={{ type:'submit' }}
                                    arial-label=""
                                    size="small"
                                    value={category.id}
                                    // onClick={handleSendData}
                                    onClick={followCategory}
                                >
                                    <PlaylistAddIcon sx={{ pointerEvents: 'none' }}/>
                                </IconButton>
                                <ListItemText sx={{ml:1}}primary={ category.name }/>
                            </ListItem>
                        )
                    ))}
                </List>
            </Box>
        </Card>
    );
}

export default FollowCategories;