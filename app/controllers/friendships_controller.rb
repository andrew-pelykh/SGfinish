class FriendshipsController < ApplicationController
  skip_before_filter  :verify_authenticity_token

  def get_friends
    if params[:limit] == "0"
      users = User.where(id: Friendship.where(user_id:params[:id]).map {|el| el=el.friend.id }).map do |el|
        user = el.attributes
        user[:avatar]=el.avatar.url
        user
      end
      render json: users.to_json
    else
      users = User.where(id: Friendship.where(user_id:params[:id]).map {|el| el=el.friend.id }).limit(params[:limit]).map do |el|
        user = el.attributes
        user[:avatar]=el.avatar.url
        user
      end
      render json: users.to_json
    end
  end
end
