require 'test_helper'

class ContactMessageSendTest < ActionMailer::TestCase
  def sample_mail_preview
    @contact_last_member = Contactu.last
    ExampleMailer.sample_email(@contact_last_member)
  end
end
