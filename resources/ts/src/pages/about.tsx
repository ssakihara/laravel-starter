import React from 'react'
import { createStyles, withStyles, WithStyles } from '@material-ui/core'

const styles = () =>
    createStyles({
        root: {},
    })

interface Props extends WithStyles<typeof styles> {
    children?: React.ReactNode
}

class App extends React.Component<Props> {
    render() {
        const { classes } = this.props
        return <div className={classes.root}>About</div>
    }
}

export default withStyles(styles)(App)
