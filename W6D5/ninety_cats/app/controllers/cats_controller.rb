class CatsController < ApplicationController
    def index
        @cats = Cat.all
        render :index
    end

    def show
        debugger
        @kat = Cat.find(params[:id])
        
    end
end