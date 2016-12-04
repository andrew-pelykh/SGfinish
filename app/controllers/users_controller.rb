class UsersController < ApplicationController
  def home
  end

  def get_user
    @user = User.find(params[:id])
    render json: @user.to_json
  end
end
