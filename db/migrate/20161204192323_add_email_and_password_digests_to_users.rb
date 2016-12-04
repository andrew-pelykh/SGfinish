class AddEmailAndPasswordDigestsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :email, :string, unique: true
    add_column :users, :password_digest, :string
    add_index :users, :email
  end
end
