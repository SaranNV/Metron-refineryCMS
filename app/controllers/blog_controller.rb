class BlogController < ApplicationController
  skip_before_filter :verify_authenticity_token
  include ActionView::Helpers::DateHelper

  def comment_submit
    name = params['author_name']
    email = params['author_email']
    blog_comment = params['comment_message']
    blog_url = params['blog_url']
    @comments= Comment.new(:name=>name,:email=>email,:comments=>blog_comment,:block_url=> blog_url)
    if @comments.save!
      render :json => {:status => "ok"}
    else
      render :json => {:errors => @comments.errors}
    end
  end

  def get_blog_comments

   blog_url = params['blogs']
   @last_updated_comments = Comment.where(:block_url => blog_url).last
   if @last_updated_comments
     @time_ago = time_ago_in_words (@last_updated_comments.created_at)
     @comment_count = 1
     @last_updated_comments.created_at = @time_ago
   else
     @time_ago = 0
     @comment_count = 0
   end
   if @last_updated_comments
      respond_to do |format|
        format.json { render :json => {:id => @last_updated_comments.id, :name =>  @last_updated_comments.name,
                                       :comments => @last_updated_comments.comments,:created_at => @time_ago,:comments_count => @comment_count }}
      end
   else
      respond_to do |format|
        format.json { render :json => {:count => @comment_count }}
      end
   end
  end

end
