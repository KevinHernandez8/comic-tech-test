import React, { Component } from 'react'
import Tittle from './Tittle'
import ViewBar from './ViewBar'
import ComicGrid from './ComicGrid'
import ComicList from './ComicList'

export default class Home extends Component {
    
    showView() {
        if (this.props.match.params.view === 'grid') {
            return <ComicGrid />
        } else {
            return <ComicList />
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center mt-4">
                    <div className="col-md-10">
                        <Tittle />
                        <ViewBar />
                    </div>
                </div>
            </div>
        )
    }
}
