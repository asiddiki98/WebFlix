class ApplicationController < ActionController::Base
    helper_method :ensure_logged_in, :current_user, :logged_in?

    protect_from_forgery with: :exception

    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end 

    def login!(user)
        @current_user = user
        session[:session_token] = user.reset_session_token!
        nil
    end 

    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil
    end 

    def logged_in?
        !!current_user
    end

    def ensure_logged_in
        render json: {message: 'you aint logged in son'} unless logged_in?
    end 

end
