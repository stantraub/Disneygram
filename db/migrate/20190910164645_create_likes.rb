class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :post_id, null: false
      t.integer :comment_id 
      t.datetime :created_at
      t.datetime :updated_at
      t.timestamps
    end

    add_index :likes, [:post_id, :user_id], unique: true
    # add_index :likes, [:comment_id, :user_id], unique: true
    add_index :likes, :user_id
    add_index :likes, :post_id
  end
end
