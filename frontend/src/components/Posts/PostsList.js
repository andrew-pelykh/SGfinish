import React, { Component} from 'react'

export default class PostsList extends Component {
  render() {
    return (
      <div>
        <h2>Posts</h2>
        {this.props.posts.map(post => {
          return (
              <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
          )
        })
       }
      </div>
     )
  }
}
