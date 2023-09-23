import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Avatar, Card, Typography, Box, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemButton, ListItemText} from '@mui/material';
// import { ExpandMoreIcon } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TimeLine from "@/Components/TimeLine";
import FollowCategories from "@/Components/FollowCategories";

const Mypage = (props) => {
    const { posts, user, categories } = props;
    
    return (
        <Authenticated auth={props.auth} header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    { user.name }のマイページ
                </h2>
            }>
            <Card>
                <Box sx={{ display:'flex', alignItems: 'center'}}>
                    <Avatar src={ user.icon_url } />
                    <Typography variant="h5" sx={{ ml: 1 }}>{ user.name }</Typography>
                </Box>
                <Typography>{ user.message }</Typography>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>フォロー中の作品</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            { user.categories.map((category) => (
                                <ListItem disablePadding>
                                    <ListItemButton component="a" href="#">
                                        <ListItemText primary={ category.name }/>
                                    </ListItemButton>
                                </ListItem>
                            )) }
                        </List>
                    </AccordionDetails>
                </Accordion>
            </Card>
            
            <Box sx={{ display: 'flex' }}>
                <TimeLine posts={ posts }/>
                <FollowCategories categories={ categories } user={ user }/>
            </Box>
            
        </Authenticated>
    );
}

export default Mypage;