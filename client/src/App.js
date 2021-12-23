import React, { useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core"

import memories from "./images/person_2.jpg"
import Post from "./components/Posts/Posts"
import Form from "./components/Form/Form"
import { getPosts } from "./actions/posts"

import useStyles from './Styles'
import { useDispatch } from 'react-redux'

const App = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    },[dispatch])
    return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.image} variant="h2" align="center">
                    Memories
                </Typography>
                <img className={classes.image} src={memories} alt='Memories' height='60' />

            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Post />
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>

        </Container>
    )
}

export default App;