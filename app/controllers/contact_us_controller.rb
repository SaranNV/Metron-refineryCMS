class ContactUsController < ApplicationController
  skip_before_filter :verify_authenticity_token
  def submit
    name = params['client_name']
    email = params['client_email']
    message = params['client_message']
    @post = Contactu.new(:name=>name,:email=>email,:message=>message)
    if @post.save!
      render :json => {:status => "ok"}
    else
      render :json => {:errors => @post.errors}
    end
  end
end
