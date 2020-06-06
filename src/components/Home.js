import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl } from '@fortawesome/free-solid-svg-icons';
import { faGripHorizontal } from '@fortawesome/free-solid-svg-icons';

import ComicGrid from './ComicGrid'
import ComicList from './ComicList'
import ComicDetail from './ComicDetail';
import Tittle from './Tittle';

export default class Home extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
          view: 'grid'
        }
    }
    
    showView() {
        if (this.state.view === 'grid') {
            return <ComicGrid/>
        } else {
          return <ComicList/>
        }
    }
    
    changeView(nView) {
        this.setState({
          view: nView
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <Tittle/>
                <Switch>
                    <Route exact path="/">
                        <div className="row border-top border-bottom bg-light align-items-center mt-4">
                            <div className="col-md-8 col-sm-6 col-6 col-lg-8 col-xl-9 pl-5">
                                <b>Latest Issues</b>
                            </div>
                    
                            <div className="col-md-2 col-sm-3 col-3 col-lg-2 col-xl-1">
                            <FontAwesomeIcon icon={faListUl} />
                                <button onClick={() => this.changeView('list')} className="btn btn-link text-dark">&nbsp;List</button>
                            </div>
                    
                            <div className="col-md-2 col-sm-3 col-3 col-lg-2 col-xl-2">
                            <FontAwesomeIcon icon={faGripHorizontal} />
                                <button onClick={() => this.changeView('grid')} className="btn btn-link text-dark">&nbsp;Grid</button>
                            </div>
                        </div>

                        {this.showView()}
                    </Route>
                    <Route exact path="/details" component={ComicDetail} />
                </Switch>
            </div>
        )
    }
}
