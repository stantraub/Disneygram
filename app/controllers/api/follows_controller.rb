class Api::FollowsController < ApplicationController
    def create 
        @follow = Follow.new(follow_params)
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
        @follow = Follow.find(params[:id])
        if @follow.destroy
            render :show
        else
            render :json, @follow.errors.full_messages, status: 422
        end
    end 

    private 

    def follow_params
        params.require(:follow).permit(:follower_id, :following_id)
    end 
end
