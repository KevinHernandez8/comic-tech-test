import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl } from '@fortawesome/free-solid-svg-icons';
import { faGripHorizontal } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import ComicGrid from './components/ComicGrid'
import ComicList from './components/ComicList'
import ComicDetail from './components/ComicDetail'
import ViewBar from './components/ViewBar';
import Tittle from './components/Tittle';
import { Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      view: 'grid'
    }
  }

  showView() {
    if (this.state.view === 'grid') {
      return <ComicGrid/>
      // return <ComicDetail />
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
        <div className="row justify-content-center mt-4">
          <div className="col-md-10">
            <Tittle />
            
            <div className="row border-top border-bottom bg-light align-items-center mt-4">
              <div className="col-md-8 col-sm-6 col-6 col-lg-8 col-xl-10">
              <b>Latest Issues</b>
              </div>

              <div className="col-md-2 col-sm-3 col-3 col-lg-2 col-xl-1">
              <FontAwesomeIcon icon={faListUl} />
                  <a href="#" className="btn btn-link text-dark">&nbsp;List</a>
              </div>

              <div className="col-md-2 col-sm-3 col-3 col-lg-2 col-xl-1">
              <FontAwesomeIcon icon={faGripHorizontal} />
                  <a href="#" className="btn btn-link text-dark">&nbsp;Grid</a>
              </div>
            </div>

            {this.showView()}
          </div>
        </div>
      </div>
          
    );
  }
}

export default App;
