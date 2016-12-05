class UsersController < ApplicationController
  skip_before_filter  :verify_authenticity_token

  def home
  end

  def get_user
    user = User.find(params[:id])
    render json: { name:user.name, email:user.email }.to_json
  end

  def create_user
    user = User.new user_params
    if user.save
      render json: { name:user.name, email:user.email }.to_json
    else
      render json: { name:user.name, email:user.email }.to_json
    end
  end

  private

    def user_params
       params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end
end
