class Api::VideosController < ApplicationController


    def index
        @videos = Video.with_attached_photo.with_attached_video.includes(:genres).all

        render :index
    end 


    def show
        @video = Video.with_attached_photo.with_attached_video.find(params[:id])

        render :show
    end 
end
