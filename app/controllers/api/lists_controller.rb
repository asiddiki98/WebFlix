class Api::ListsController < ApplicationController
    before_action :ensure_logged_in

    def index 
        @lists = current_user.listed_movies.with_attached_photo.with_attached_video.includes(:genres).all
        if @lists
            render :index
        else
            render json:["failure"], status: 422
        end
        
    end 

    def create 
        @list = List.new(list_params)

        if @list.save 
            @lists = @lists = current_user.listed_movies.with_attached_photo.with_attached_video.includes(:genres).all
            render :index, status: 200
        else 
            render json: {}, status: 422
        end 
    end 

    def destroy 
        @list = List.find_by(video_id: list_params[:video_id],  user_id: list_params[:user_id])

        if List.destroy(@list.id)
            @lists = @lists = current_user.listed_movies.with_attached_photo.with_attached_video.includes(:genres).all
            render :index, status: 200
        else 
            render json: {}, status: 422
        end 
    end 


    private

    def list_params
        params.require(:list).permit(:video_id, :user_id)
    end 
end
