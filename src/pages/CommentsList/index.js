import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class index extends Component {
    state = {
        commentList: []
    }

    fetchComments = async (event) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments/');
        const data = await response.json();

        this.setState({
            commentList: data
        })
    }

    render() {
        return (
            <div>
                <h2>Comment List</h2>

                <button onClick={this.fetchComments}>Get Comments</button>

                <ul>
                    {
                        this.state.commentList.map(item =>
                            <li key={item.id}>
                                <Link to={'/comment/' + item.id}>{item.name}</Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}
