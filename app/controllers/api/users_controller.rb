class Api::UsersController < ApplicationController
  before_action :authenticate_user!, except: [:current_logged_in_user]
  
  def current_logged_in_user
    # @user = current_user
#     if @user.nil?
#       render json: {message: "nope"}
#     else
#       render 'api/users/show'
#     end
  end
  
  def update
    @user = User.find(params[:id])
    if @user.email == "guest@example.com"
      render json: {message: "unable to update guest's email address.  you will break the matrix if you do.", status: 500}
    else
      if @user.update_attributes(user_params)
        render :show
      else
        render json: {message: "something went wrong server side updating the user", errors: @user.errors.full_messages, status: 400}
      end
    end
  end
  
  private 
  
  def user_params
    params.require(:user).permit(:id, :first_name, :last_name, :email)
  end
end
