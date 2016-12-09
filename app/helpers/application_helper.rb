module ApplicationHelper
  def map_users(data)
    new_data = data.map do |el|
      new_el={}
      new_el[:name]=el.name
      new_el[:id]=el.id
      new_el[:avatar]=el.avatar.thumb.url
      new_el[:friendship] = Friendship.exists?(user_id:current_user.id, friend_id:el.id)? true : false
      new_el
    end
  end
end
