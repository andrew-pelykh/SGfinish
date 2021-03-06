import React, { Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { getUser, getCurrentUser, getFriends, addFriend, deleteFriend } from '../actions/UserActions'
import { getPosts } from '../actions/PostActions'
import { getPhotos } from '../actions/PhotoActions'
import PostsList from '../components/Posts/PostsList'
import UsersList from '../components/Users/UsersList'
import PhotosList from '../components/Photos/PhotosList'

class User extends Component {

  loadData(load_props){
    const { dispatch } = this.props
    dispatch(getCurrentUser())
    dispatch(getUser(load_props.params.id))
    dispatch(getPosts(load_props.params.id))
    dispatch(getFriends(load_props.params.id,8))
    dispatch(getPhotos(load_props.params.id, 8))
  }

  componentDidMount() {
    this.loadData(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.id !== this.props.params.id) {
      this.loadData(nextProps)
    }
  }

  friend_link(friendship,id) {
    if (friendship) {
      return (<a href='#' onClick={(e) => this.onClickDeleteFriend(e,id)}>Revome from friends</a>)
    }
      return (<a href='#' onClick={(e) => this.onClickAddFriend(e,id)}>Add to friends</a>)
  }

  onClickAddFriend(event,id){
    event.preventDefault()
    const { dispatch } = this.props
    dispatch(addFriend(id))
  }

  onClickDeleteFriend(event,id){
    event.preventDefault()
    const { dispatch } = this.props
    dispatch(deleteFriend(id))
  }

  render() {
    return (
      <div>
        <img src={this.props.user.avatar}/>
        <p>{this.props.user.name}</p>
        {this.friend_link(this.props.user.isFriend,this.props.user.id)}

        <p><Link to={'photos/'+ this.props.user.id}> Gallery </Link></p>
        <PhotosList photos={Object.keys(this.props.photos).map(key => this.props.photos[key])} />

        <p><Link to={'friends/'+ this.props.user.id}> Friends </Link></p>
        <UsersList users={Object.keys(this.props.users).map(key => this.props.users[key])} />

        <PostsList posts={Object.keys(this.props.posts).map(key => this.props.posts[key])} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    current_user: state.current_user,
    posts: state.posts,
    users: state.users,
    photos: state.photos
  }
}

export default connect(mapStateToProps)(User)
