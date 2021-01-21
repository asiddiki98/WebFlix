class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
          render json: @user.errors.full_messages, status: 401 
        end 
    end 

    def check_email
        user = User.find_by_email(params[:email])

        if user 
            render json: {email: user.email}, status: 200
        else 
            render json: {}, status: 401
        end 
    end 

    private 
    def user_params
        params.require(:user).permit(:email, :password)
    end 
end
