class Api::ListsController < ApplicationController
    before_action :ensure_logged_in

    def index 
        @lists = current_user.listed_movies
 
        render :index
    end 

    def create 
        @list = List.new(list_params)

        if @list.save 
            render :index, status: 200
        else 
            render :index, status: 422
        end 
    end 

    def destroy 
        @list = List.find_by(video_id: list_params[:video_id],  user_id: list_params[:user_id])

        if list.destroy(@list.id)
            render :index, status: 200
        else 
            render :index, status: 422
        end 
    end 


    private

    def list_params
        params.require(:list).permit(:video_id, :user_id)
    end 
end
