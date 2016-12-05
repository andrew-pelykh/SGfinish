class SessionsController < ApplicationController
  skip_before_filter  :verify_authenticity_token

  def signin_user
    user = User.find_by(email: params[:user][:email].downcase)
    if user && user.authenticate(params[:user][:password])
      sign_in user
      render json: { name:user.name, email:user.email }.to_json
    else
      render json: user.to_json
    end
  end

  def destroy
    signout
    redirect_to root_url
  end

end
