import React from 'react'
import ReactDOM from 'react-dom'
import Layout from '@/layouts/default'

export default class App extends React.Component {
    render() {
        return <Layout></Layout>
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
