import React, { Component } from "react";
import { Link } from "react-router-dom";
import { config } from '../Config';
import axios from 'axios';
import moment from 'moment';

class ComicGrid extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            errorMessage: ''
        }
    }

    componentDidMount() {
        axios.get(`${config.corsApi}/${config.apiUrl}/issues`, {
            params: {
                api_key: config.apiKey,
                format: 'json'
            }
        })
        .then(response => {
            console.log(response);
            this.setState({
                items: response.data.results
            })
        })
        .catch(error => {
            console.log(error.message)
            this.setState({
                errorMessage: error.message
            })
        })
    }

    render() {
        return (
            <div className="mt-4">
                <div className="row my-3">
                    {this.state.items.map(item => {
                        return <div className="col-md-3 col-sm-3 col-3 text-center my-2">
                            <Link to={{
                                pathname: '/details',
                                state: {
                                    api_detail_url: item.api_detail_url
                                }
                            }}><img className="img-fluid" src={item.image.original_url} alt=""/></Link><br/><br/>
                            <Link to={{
                                pathname: '/details',
                                state: {
                                    api_detail_url: item.api_detail_url
                                }
                            }} className="text-dark"><b>{item.volume.name + ' #' + item.issue_number}</b></Link><br/>
                            <small className="text-muted">{moment(item.date_added, 'YYYY-MM-DD').format('MMMM DD, YYYY')}</small>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}
export default ComicGrid;