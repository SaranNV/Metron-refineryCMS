class ContactMessageSend < ApplicationMailer
   # default to: ENV["GMAIL_USERNAME"]
  def sample_email(name,message,client_email)
    @user = name
    @subject =  "Enquiry Message - Received an Enquiry Message from #{name}"
    @message = message
    @metron_admin = ENV["GMAIL_USERNAME"]
    @client_email = client_email
    mail(from: client_email, to: @metron_admin, subject: @subject)
  end
end
