class Api::CommentsController < ApplicationController
    def create 
        @comment = Comment.new(comment_params)
    end 

    def index 
        @comments = Comment.all
        render :index 
    end 

    def show 
        @comment = Comment.find(params[:id])
        if @comment
            render :show
        else
            render json: @comment.errors.full_messages, status: 404
        end
    end     

    def update
        @comment.find(params[:id])
        if @comment.update(comment_params)
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end 

    def destroy 
        @comment.find(params[:id])
        if @comment
            render :show 
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end 

    private 

    def comment_params
        params.require(:comment).permit(:post_id, :author_id, :body)
    end 

end
