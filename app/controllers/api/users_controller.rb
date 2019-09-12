class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params);
        if @user.save
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
        @post = Post.find(params[:id])
        if @post.update(post_params)
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end 
    end 

    private 

    def user_params
        params.require(:user).permit(:username, :password)
    end
end
