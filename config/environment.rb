# Load the rails application
require File.expand_path('../application', __FILE__)


# Use the Flickr_fu gem
require 'flickr_fu'

#ENV['RAILS_ENV'] ||= 'development'

#echo "RACK_ENV=development" >>.env

# Initialize the rails application
Webspace::Application.initialize!
