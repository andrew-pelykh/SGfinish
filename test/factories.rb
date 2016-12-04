FactoryGirl.define do
  factory :user do
    sequence(:name)  { |n|  "User #{n}" }
    sequence(:email) { |n| "User_#{n}@mail.com"}
    password "password"
    password_confirmation "password"
  end
end
