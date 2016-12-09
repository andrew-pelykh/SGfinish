module ApplicationHelper
  def map_users(data)
    new_data = data.map do |el|
      new_el={}
      new_el[:name]=el.name
      new_el[:id]=el.id
      new_el[:avatar]=el.avatar.url
      new_el[:friendship] =  friends?(current_user, el)
      new_el
    end
  end

  def friends? (user1, user2)
    Friendship.exists?(user_id:user1.id, friend_id:user2.id)
  end

  def friends_id(id)
    Friendship.where(user_id:id).map {|el| el=el.friend.id }
  end
end
