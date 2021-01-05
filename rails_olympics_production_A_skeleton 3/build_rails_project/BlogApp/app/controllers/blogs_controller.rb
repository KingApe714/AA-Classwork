class BlogsController < ApplicationController
    
    def index
        @blogs = Blog.all
        render :index
    end

    def show
        @blog = Blog.find_by(id: params[:id])
        render :show
    end

    def create
        @blog = Blog.new(params.require(:blog).permit(:title, :author_id, :body))
        if @blog.save
            redirect_to blogs_url
        else
            render :new
        end
    end

    def destroy
        @blog = Blog.find_by(id: params[:id])
        @blog.destroy
        redirect_to blogs_url
    end
end