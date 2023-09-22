import React from "react";
import { Avatar, Paper, Container, Card, Typography, Box, Button, ImageList, ImageListItem} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import styled from "@emotion/styled";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { spacing } from '@mui/system';


const Post = styled(Card)({
    padding: 12,
    margin: 6,
});

const MyGrid = styled(Grid)({
    // margin: 0,
});

const TimeLine = (props) => {
    const { auth, posts } = props;
    console.log(posts);
    
    return (
        <Container>
            { posts.map((post) => (
                <Card sx={{ p:2, m:1 }} key={post.id}>
                    <Box sx={{ display:'flex', alignItems:'center', justifyContent: 'space-between' }}>
                        <Box sx={{ display:'flex', alignItems: 'center'}}>
                            <Avatar src={ post.author.icon_url } />
                            <Typography variant="h5" sx={{ ml: 1 }}>{ post.author.name }</Typography>
                        </Box>
                        <Button variant="outlined">{ post.category.name }</Button>
                    </Box>
                    <Typography sx={{ m:1 }} variant="body1">{ post.body }</Typography>
                    <ImageList sx={{ m:1, width: 483 }} cols={2} rowHeight={135} variant="quilted">
                      {post.images.map((image) => (
                        <ImageListItem key={image.image_url}>
                          <img
                            srcSet={`${image.image_url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            src={`${image.image_url}?w=164&h=164&fit=crop&auto=format`}
                            alt="画像が表示できません"
                            loading="lazy"
                          />
                        </ImageListItem>
                      ))}
                    </ImageList>
                    <Typography sx={{ m:1 }}>コメント数：{ post.comments.length }</Typography>
                </Card>
            )) }
        </Container>
    );
}

export default TimeLine;