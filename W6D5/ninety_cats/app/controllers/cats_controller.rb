class CatsController < ApplicationController
    def index
        @cats = Cat.all
        render :index
    end

    def show
        @kat = Cat.find(params[:id])
        
    end
end