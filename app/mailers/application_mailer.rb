class ApplicationMailer < ActionMailer::Base
  default to: ENV["GMAIL_USERNAME"]
  layout 'mailer'
end
