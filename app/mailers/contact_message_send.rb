class ContactMessageSend < ApplicationMailer
    default from: ENV["GMAIL_USERNAME"]

  def sample_email(name,message,client_email)
    @user = name
    @subject =  "Enquiry Message - Received an Enquiry Message from #{name} - Email - #{client_email}"
    @message = message
    @recipent = "spree.assist@gmail.com"
    @metron_admin = ENV["GMAIL_USERNAME"]
    @client_email = client_email
    mail(:to => @recipent ,:subject => @subject)
  end
end
