FactoryGirl.define do
  factory :user do
    sequence(:name)  { |n|  "User #{n}" }
    sequence(:email) { |n| "User_#{n}@mail.com"}
    password "password"
    password_confirmation "password"
  end

  factory :post do
    sequence(:title)  { |n| "title #{n}" }
    sequence(:body) { "a"*10 }
    user
  end

  factory :friendship do
    sequence(:friend_id) { |n| n}
    user
  end

  factory :photo do
    sequence(:url) { "Some photo url" }
    user
  end

end
