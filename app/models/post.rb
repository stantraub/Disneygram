class Post < ApplicationRecord

    validates :body, :author_id, :created_at, :updated_at, presence: true


    has_one_attached :post

    belongs_to :user,
        foreign_key: :author_id,
        class_name: :User

    has_many :comments,
        foreign_key: :post_id,
        class_name: :Comment

    has_many :likes,
        foreign_key: :post_id,
        class_name: :Like
end
