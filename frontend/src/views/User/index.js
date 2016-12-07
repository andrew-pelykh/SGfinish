import React, { Component} from 'react'
import { connect } from 'react-redux'
import { getUser, getCurrentUser, getFriends } from '../../actions/UserActions'
import { getPosts } from '../../actions/PostActions'
import PostsList from '../../components/Posts/PostsList'
import UsersList from '../../components/Users/UsersList'

class User extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getCurrentUser())
    dispatch(getUser(this.props.params.id))
    dispatch(getPosts(this.props.params.id))
    dispatch(getFriends(this.props.params.id,8))
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.params.id !== this.props.params.id) {
      const { dispatch } = this.props
      dispatch(getCurrentUser())
      dispatch(getUser(nextProps.params.id))
      dispatch(getPosts(nextProps.params.id))
      dispatch(getFriends(nextProps.params.id, 8))
    }
  }

  render() {


    return (
      <div>
        <p>{this.props.user.name}</p>
        <PostsList posts={Object.keys(this.props.posts).map(key => this.props.posts[key])} />
        <UsersList users={Object.keys(this.props.users).map(key => this.props.users[key])} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    current_user: state.current_user,
    posts: state.posts,
    users: state.users
  }
}

export default connect(mapStateToProps)(User)
