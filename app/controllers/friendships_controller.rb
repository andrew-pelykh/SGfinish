class FriendshipsController < ApplicationController
  skip_before_filter  :verify_authenticity_token

  def get_friends
    if params[:limit] == 0
      render json: User.where(id: Friendship.where(user_id:params[:id]).map {|el| el=el.friend.id }).to_json
    else
      render json: User.where(id: Friendship.where(user_id:params[:id]).map {|el| el=el.friend.id }).limit(params[:limit]).to_json
    end
  end
end
