import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class index extends Component {
    state = {
        comment: {}
    }

    fetchCommentDetails = async () => {
        const params = this.props.match.params;
        const url = 'https://jsonplaceholder.typicode.com/comments/';

        const response = await fetch(url + params.id);
        const data = await response.json();

        this.setState({
            comment: data
        })
    }

    render() {
        const params = this.props.match.params

        return (
            <div>
                <h2>Comments {params.id}</h2>

                <button onClick={this.fetchCommentDetails}>Show Details</button>

                <h4>{this.state.comment.name}</h4>
                <p>{this.state.comment.email}</p>
                <p>{this.state.comment.body}</p>
            </div>
        )
    }
}

export default withRouter(index)