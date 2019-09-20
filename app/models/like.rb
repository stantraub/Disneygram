class Like < ApplicationRecord
    belongs_to :comment,
        optional: true,
        foreign_key: :comment_id,
        class_name: :Comment

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :post,
        foreign_key: :post_id,
        class_name: :Post
end
