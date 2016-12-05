# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
def sample_user number
  {
    name: "name #{number}",
    email: "user#{number}@mail.com",
    password: "password",
    password_confirmation: "password"
  }
end

User.delete_all
10.times {|n| User.create(sample_user n)}
