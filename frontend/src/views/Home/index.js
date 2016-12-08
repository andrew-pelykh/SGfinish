import React, { Component} from 'react'
import { connect } from 'react-redux'
import { getCurrentUser, getFriends } from '../../actions/UserActions'
import { getPosts } from '../../actions/PostActions'
import PostsList from '../../components/Posts/PostsList'

class Home extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getCurrentUser())
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
        <p>{this.props.current_user.name}</p>
        <PostsList posts={Object.keys(this.props.posts).map(key => this.props.posts[key])} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    current_user: state.current_user,
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home)
