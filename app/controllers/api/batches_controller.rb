class Api::BatchesController < ApplicationController
  def index 
    render json: {batches: Batch.all}
  end
end
