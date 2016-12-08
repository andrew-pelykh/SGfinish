import React, { Component} from 'react'

export default class PostsList extends Component {
  render() {
    return (
      <div>
        <h2>Posts</h2>
        {this.props.posts.map(post => {
          return (
              <div key={post.id+"_"+post.user_id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <img src={post.photo}/>
              </div>
          )
        })
       }
      </div>
     )
  }
}
