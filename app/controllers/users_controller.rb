class UsersController < ApplicationController
  skip_before_filter  :verify_authenticity_token

  def home
  end

  def get_user
    user = User.find(params[:id])
    render json: { name:user.name, email:user.email, id:user.id }.to_json
  end

  def create_user
    user = User.new user_params
    if user.save
      render json: { name:user.name, email:user.email, id:user.id }.to_json
    else
      render json: { name:user.name, email:user.email, id:user.id }.to_json
    end
  end

  def get_current_user
    if signed_in?
      render json: { name:current_user.name, email:current_user.email, id:current_user.id }.to_json
    else
      render json: { name:"", email:"", id:""}.to_json
    end
  end

  private

    def user_params
       params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end
end
