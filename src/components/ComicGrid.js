import React, { Component } from "react";
import { config } from '../Config';
import axios from 'axios';
import moment from 'moment';
import { Link } from "react-router-dom";

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
                format: 'json',
                limit: 8
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

    issueDetails = (id) => {
        axios.get(`${config.corsApi}/${config.apiUrl}/issues`, {
            params: {
                api_key: config.apiKey,
                format: 'json',
                filter: `id:${id}`
            }
        })
        .then(response => {
            let api_detail_url = response.data.results.api_detail_url
            // mandar el url por medio del props al ComicDetail
        })
        .catch(error => {

        })
    }

    render() {
        return (
            <div className="mt-4">
                <div className="row my-3">
                    {this.state.items.map(item => {
                        return <div className="col-md-3 col-sm-3 col-3 text-center my-2">
                            <a href="#"><img className="img-fluid" src={item.image.original_url} alt=""/></a><br/><br/>
                            <a onClick={this.issueDetails(item.id)} className="text-dark"><b>{item.volume.name + ' #' + item.issue_number}</b></a><br/>
                            <small className="text-muted">{moment(item.date_added, 'YYYY-MM-DD').format('MMMM DD, YYYY')}</small>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}
export default ComicGrid;