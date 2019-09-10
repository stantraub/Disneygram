class Api::LikesController < ApplicationController
        def create 
        @like = Like.new(like_params)
        if @like.save
            render :show
        else
            render json: @like.errors.full_messages, status: 422
        end
    end 

    def index
        @likes = Like.all
        render :index 
    end 

    def show
        @like = Like.find(params[:id])
        if @like 
            render :show
        else
            render :json, @like.errors.full_messages, status: 404
        end
    end 

    def destroy 
        @like = Like.find(params[:id])
        if @like.destroy
            render :show
        else
            render :json, @like.errors.full_messages, status: 422
        end
    end 

    private 

    def like_params
        params.require(:like).permit(:user_id, :post_id, :comment_id)
    end 
end
