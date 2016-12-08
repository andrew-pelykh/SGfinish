class UsersController < ApplicationController
  skip_before_filter  :verify_authenticity_token

  def home
  end

  def get_user
    user = User.find(params[:id])
    render json: { name:user.name, email:user.email, id:user.id }.to_json
  end

  def get_users
    if params[:limit] == 0
      render json: User.all.to_json
    else
      render json: User.all.limit(params[:limit]).to_json
    end
  end

  def create_user
    user = User.new new_user_params
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

  def update_user
    if current_user.update_attributes(update_user_params)
      render json: { name:user.name, email:user.email, id:user.id }.to_json
    else
      render json: { name:"", email:"", id:""}.to_json
    end
  end

  private

    def new_user_params
       params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end

    def update_user_params
       params.require(:user).permit(:name, :email)
    end
end
