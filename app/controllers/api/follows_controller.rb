class Api::FollowsController < ApplicationController
    def create 
        @follow = Follow.new(follow_params)
        @follow.follower_id = current_user.id 
        if @follow.save
            render :show
        else
            render json: @follow.errors.full_messages, status: 422
        end
    end 

    def index
        @follows = Follow.all
        render :index 
    end 

    def show
        @follow = Follow.find(params[:id])
        if @follow 
            render :show
        else
            render :json, @follow.errors.full_messages, status: 404
        end
    end 

    def destroy 
        @follow = Follow.find_by(follower_id: current_user.id, user_id: params[:id])
        if @follow.destroy
            render :show
        else
            render :json, @follow.errors.full_messages, status: 422
        end
    end 

    private 

    def follow_params
        params.require(:follow).permit(:follower_id, :user_id)
    end 
end
