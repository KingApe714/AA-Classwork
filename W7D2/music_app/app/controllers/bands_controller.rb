class BandsController < ApplicationController
    def index
    @bands = Band.all
    #render json: @bands
    render :index
  end

  def new
    @band = Band.new
    render :new
  end

  def edit 
    # /bands/:id/edit
    @band = Band.find(params[:id])
    render :edit
  end

  def show
    @band = Band.find(params[:id])
    render :show
  end

  def create
    @band = Band.new(band_params)
    
    if @band.save
      #login band if save successful 
      # redirect_to "/bands/#{band.id}"
      #login(@band) #from applicationcontroller 
      redirect_to band_url(@band)
    else
  
      flash.now[:errors] = @band.errors.full_messages
      render :new
    end
  end

  def update
    @band = Band.find(params[:id])

    if @band.update(band_params)
      # redirect_to "/bands/#{band.id}"
      # redirect_to band_url(band.id)
      redirect_to band_url(@band)
    else
      render :edit
    end
  end

  def destroy
    band = Band.find(params[:id])
    band.destroy
    render json: band
  end

  private
  def band_params
    params.require(:band).permit(:name)
  end

end
