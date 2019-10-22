class User < ApplicationRecord
    validates :username, :password_digest, :session_token, :full_name, presence: true 
    validates :password, length: { minimum: 6, allow_nil: true}
    after_initialize :ensure_session_token
    attr_reader :password

    has_one_attached :profile_pic

    has_many :posts, 
        foreign_key: :author_id,
        class_name: :Post
    
    has_many :comments, 
        foreign_key: :author_id,
        class_name: :Comment

    has_many :likes, 
        foreign_key: :user_id,
        class_name: :Like

    has_many :follows,
        foreign_key: :follower_id,
        class_name: :Follow,
        dependent: :destroy

    has_many :followers,
        foreign_key: :following_id,
        class_name: :Follow,
        dependent: :destroy

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        user && user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end 
end
