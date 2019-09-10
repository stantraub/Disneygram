class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :post_id, null: false
      t.integer :comment_id, null: false
      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false
      t.timestamps
    end

    add_index :likes, [:post_id, :user_id], unique: true
    add_index :likes, [:comment_id, :user_id], unique: true
  end
end
