import React, { Component} from 'react'

export default class PostsList extends Component {

  hasVideo (body){
    let link=body.video
    if (link){
    return (<iframe title="YouTube video player" width="640" height="360" src={link} frameBorder="0" allowFullScreen></iframe>)
    } else {
      return (<div></div>)
    }
  }

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
                {this.hasVideo(post)}
              </div>
          )})
       }
      </div>
     )
  }
}
