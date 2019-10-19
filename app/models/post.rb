class Post < ApplicationRecord
    validates :author_id, presence: true

    has_one_attached :photo

    belongs_to :user,
        foreign_key: :author_id,
        class_name: :User

    has_many :comments,
        foreign_key: :post_id,
        class_name: :Comment
    
    has_many :commenters,
        through: :comments,
        source: :user
        
    has_many :likes,
        foreign_key: :post_id,
        class_name: :Like

    has_many :likers,
        through: :likes,
        source: :user
end
