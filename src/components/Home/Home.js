import React, { Component } from 'react'
import Post from '../Post/Post'
import Navigation from '../Navigation/Navigation'
import Loading from '../Loading/Loading'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    fetchPosts = () => {
        console.log('fetched');
    }

    render() {
        const { posts } = this.state;
        const componentPost = posts.map((post, _) => {
            <Post post = {post} />
        });
        return (
            <div>
                <Navigation onSignOut={this.props.signOutMethod}/>
                {this.state.posts.length < 10 ? <Loading /> : componentPost}
            </div>
        )
    }
}
