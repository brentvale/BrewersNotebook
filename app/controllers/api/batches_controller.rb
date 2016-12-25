class Api::BatchesController < ApplicationController
  def index 
    batches = current_user.batches
    render json: {batches: batches}
  end
end
