class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
        t.string   "title"
        t.string   "body"
        t.datetime "created_at"
        t.datetime "updated_at"
        t.integer  "user_id"
      end

    add_index "posts", ["user_id", "created_at"], name: "index_posts_on_user_id_and_created_at", using: :btree
  end
end
