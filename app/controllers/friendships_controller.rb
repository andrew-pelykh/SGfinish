class FriendshipsController < ApplicationController
  skip_before_filter  :verify_authenticity_token

  def get_friends
    if params[:limit] == "0"
      users = map_users(User.where(id: Friendship.where(user_id:params[:id]).map {|el| el=el.friend.id }))
      render json: users.to_json
    else
      users = map_users(User.where(id: Friendship.where(user_id:params[:id]).map {|el| el=el.friend.id }).limit(params[:limit]))
      render json: users.to_json
    end
  end

  def add_friend
    friendship = Friendship.new(user_id:current_user.id, friend_id: params[:id])
    user = User.find(params[:id])
    if friendship.save
      render json: { name:user.name, email:user.email, id:user.id, avatar:user.avatar.url, isFriend: true }.to_json
    else
      render json: { name:user.name, email:user.email, id:user.id, avatar:user.avatar.url, isFriend:(Friendship.exists?(user_id:current_user.id, friend_id:user.id))}.to_json
    end
  end

  def delete_friend
    friendship = Friendship.find_by(user_id:current_user.id, friend_id: params[:id])
    user = User.find(params[:id])
    friendship.destroy
      render json: { name:user.name, email:user.email, id:user.id, avatar:user.avatar.url, isFriend:(Friendship.exists?(user_id:current_user.id, friend_id:user.id))}.to_json
  end

end
