require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  include SessionsHelper
  def test_get_user
    user = User.find(params[:id])
    render json: { name:user.name, email:user.email, id:user.id, avatar:user.avatar.url,isFriend:(Friendship.exists?(user_id:current_user.id, friend_id:user.id)) }.to_json
  end



  def test_update_user
    @user = create(:user)
    sign_in @user
    patch ('/update_user'), params: {:name => 'New_name',:email =>"new_mail@mail.com",
    password:'password', password_confirmation:'password'}
    assert_response :success
    data = JSON.parse(response.body)
    assert_equal @user.to_json, data
  end
end
