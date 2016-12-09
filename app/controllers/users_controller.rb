class UsersController < ApplicationController
  skip_before_filter  :verify_authenticity_token

  def home
  end

  def get_user
    user = User.find(params[:id])
    render_user(user)
  end

  def get_users
    if params[:limit] == "0"
      users = map_users(User.all)
      render json: users.to_json
    else
      users = map_users(User.all.limit(params[:limit]))
      render json: users.to_json
    end
  end

  def create_user
    user = User.new new_user_params
    if user.save
      sign_in user
      render_current_user
    else
      render json: { name:"", email:"", id:"",avatar:""}.to_json
    end
  end

  def get_current_user
    if signed_in?
      render_current_user
    else
      render json: { name:"", email:"", id:"",avatar:""}.to_json
    end
  end

  def update_user
    if current_user.update_attributes(update_user_params)
      render_current_user
    else
      render json: { name:"", email:"", id:"",avatar:""}.to_json
    end
  end

  private

    def render_user(user)
      render json: { name:user.name, email:user.email, id:user.id, avatar:user.avatar.url,
        isFriend: friends?(current_user, user) }.to_json
    end

    def render_current_user
      render json: { name:current_user.name, email:current_user.email,
        id:current_user.id, avatar:current_user.avatar.url }.to_json
    end

    def new_user_params
       params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end

    def update_user_params
       params.require(:user).permit(:name, :email,:password,:avatar, :password_confirmation)
    end
end
