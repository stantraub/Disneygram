class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            @user.profile_pic.attach(io: File.open("#{Rails.root}/app/assets/images/default_pic.png"), filename: 'default_pic.png')
            login(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def index 
        @users = User.all
        render :index
    end 

    def show 
        @user = User.find(params[:id])
        if @user 
            render :show
        else
            render json: @user.errors.full_messages, status: 404
        end 
    end 

    def update 
        @user = current_user

        if @user.update(user_params)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end 
    end 

    private 

    def user_params
        params.require(:user).permit(:username, :full_name, :password, :bio, :profile_pic)
    end
end
