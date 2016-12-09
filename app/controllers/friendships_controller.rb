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
end
