import React, { Component} from 'react'
import { connect } from 'react-redux'
import { getCurrentUser, getFriends } from '../actions/UserActions'
import { getPosts } from '../actions/PostActions'
import PostsList from '../components/Posts/PostsList'
import UsersList from '../components/Users/UsersList'
import { Link } from 'react-router'

class Home extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getCurrentUser())
    if (this.props.current_user.name !== ""){
      dispatch(getPosts(this.props.current_user.id))
      dispatch(getFriends(this.props.current_user.id,8))
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.current_user.id !== this.props.current_user.id){
      const { dispatch } = this.props
      dispatch(getPosts(nextProps.current_user.id))
      dispatch(getFriends(nextProps.current_user.id,8))
    }
  }

  render() {


    return (
      <div>
       <img src={this.props.current_user.avatar}/>
        <p>{this.props.current_user.name}</p>
        <p><Link to={'friends/'+ this.props.current_user.id}> Friends </Link></p>
        <UsersList users={Object.keys(this.props.users).map(key => this.props.users[key])} />
        <PostsList posts={Object.keys(this.props.posts).map(key => this.props.posts[key])} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    current_user: state.current_user,
    posts: state.posts,
    users: state.users
  }
}

export default connect(mapStateToProps)(Home)
