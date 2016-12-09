class FriendshipsController < ApplicationController
  skip_before_filter  :verify_authenticity_token

  def get_friends
    friends_id = Friendship.where(user_id:params[:id]).map {|el| el=el.friend.id }
    if params[:limit] == "0"
      users = map_users(User.where(id: friends_id))
    else
      users = map_users(User.where(id: friends_id).limit(params[:limit]))
    end
    render json: users.to_json
  end

  def add_friend
    friendship = Friendship.create(user_id:current_user.id, friend_id: params[:id])
    user = User.find(params[:id])
    render_friend(user, params[:id])
  end

  def delete_friend
    friendship = Friendship.find_by(user_id:current_user.id, friend_id: params[:id])
    user = User.find(params[:id])
    friendship.destroy
    render_friend(user, params[:id])
  end

  private

    def render_friend(user, friend_id)
      render json: { name:user.name, email:user.email, id:user.id, avatar:user.avatar.url,
        isFriend: friends?(current_user, user) }.to_json
    end
end
