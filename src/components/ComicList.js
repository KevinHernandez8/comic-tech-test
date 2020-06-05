import React, { Component } from "react";
import { config } from '../Config';
import axios from 'axios';
import moment from 'moment';

class ComicList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            errorMessage: ''
        }
    }

    componentDidMount() {
        axios.get(`${config.apiUrl}/issues`, {
            params: {
                api_key: config.apiKey,
                format: 'json',
                limit: 20
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

    issueDetails(api_detail_url) {

    }

    render() {
        return (
            <div className="mt-4">
                {this.state.items.map(item => {
                    return <div className="row my-3 border-bottom text-center align-items-center">
                        <div className="col pb-3">
                            <a onClick={() => this.issueDetails(item.api_detail_url)}><img className="img-fluid" src={item.image.small_url} alt="" /></a>
                        </div>
                        <div className="col">
                            <a onClick={() => this.issueDetails(item.api_detail_url)} className="text-dark"><b>{item.volume.name + ' #' + item.issue_number}</b></a><br/>
                            <small className="text-muted">{moment(item.date_added, 'YYYY-MM-DD').format('MMMM DD, YYYY')}</small>
                        </div>
                    </div>
                })}
            </div>
        )
    }
}
export default ComicList;