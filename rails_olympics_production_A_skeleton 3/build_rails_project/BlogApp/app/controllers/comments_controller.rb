class CommentsController < ApplicationController
    
    def create
        redirect_to blogs_url
    end

    def destroy
        @comment = Comment.find_by(id: params[:id])
        @comment.destroy
    end
end