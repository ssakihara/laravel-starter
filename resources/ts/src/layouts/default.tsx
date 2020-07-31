import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Container,
    createStyles,
    withStyles,
    WithStyles,
    CssBaseline,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Index from '@/pages'
import About from '@/pages/about'

const styles = () =>
    createStyles({
        container: {
            marginTop: '20px',
        },
    })

type Props = WithStyles<typeof styles>

class App extends React.Component<Props> {
    render() {
        const { classes } = this.props
        return (
            <React.Fragment>
                <CssBaseline />
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6">{'Laravel'}</Typography>
                    </Toolbar>
                </AppBar>
                <Container className={classes.container}>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Index} />
                            <Route exact path="/about" component={About} />
                        </Switch>
                    </Router>
                </Container>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(App)
