import React, { Component } from 'react';
import { config } from '../Config';
import axios from 'axios';


class ComicDetail extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: '',
            character_credits: [],
            team_credits: [],
            location_credits: [],
            concept_credits: []
        }
    }

    componentDidMount() {
        const { api_detail_url } = this.props.location.state
        axios.get(`${config.corsApi}/${api_detail_url}`, {
             params: {
                 api_key: config.apiKey,
                format: 'json',
             }
        })
        .then(response => {
            this.setState({
                imageUrl: response.data.results.image.original_url,
                character_credits: this.state.character_credits.concat(response.data.results.character_credits),
                team_credits: this.state.team_credits.concat(response.data.results.team_credits),
                location_credits: this.state.location_credits.concat(response.data.results.location_credits),
                concept_credits: this.state.concept_credits.concat(response.data.results.concept_credits)
            })
        })
        .catch(error => {
            this.setState({
                errorMessage: error.message
            })
        })
    }

    render() {
        return (
            <div className="row mt-4">
                <div className="col-12 order-2 col-sm-8 order-sm-1 col-md-8 col-lg-8 col-xl-8">
                    <h4 className="pb-3 border-bottom">Characters</h4>
                    <div className="row">
                        {this.state.character_credits.map(character => {
                            return <div className="col-6 col-sm-6 col-md-6 col-lg-6 pb-3">
                                {character.name}
                            </div>
                        })}
                    </div>
                    <h4 className="pb-3 border-bottom">Teams</h4>
                    <div className="row">
                        {this.state.team_credits.map(team => {
                            return <div className="col-6 col-sm-6 col-md-6 col-lg-6 pb-3">
                                {team.name}
                            </div>
                        })}
                    </div>
                    <h4 className="pb-3 border-bottom">Location</h4>
                    <div className="row">
                        {this.state.location_credits.map(location => {
                            return <div className="col-6 col-sm-6 col-md-6 col-lg-6 pb-3">
                                {location.name}
                            </div>
                        })}
                    </div>
                    <h4 className="pb-3 border-bottom">Concepts</h4>
                    <div className="row">
                        {this.state.concept_credits.map(concept => {
                            return< div className="col-6 col-sm-6 col-md-6 col-lg-6 pb-3">
                                {concept.name}
                            </div>
                        })}
                    </div>
                </div>
                <div className="col-12 order-1 col-sm-4 col-md-4 col-lg-4 col-xl-4 pb-3">
                    <img src={this.state.imageUrl} className="img-fluid" alt="" />
                </div>
            </div>
        )
    }
}

export default ComicDetail;