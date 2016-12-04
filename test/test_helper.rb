ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'
require 'minitest/autorun'
require 'database_cleaner'


class ActiveSupport::TestCase
  include FactoryGirl::Syntax::Methods

  DatabaseCleaner.strategy = :truncation


  def setup
    DatabaseCleaner.start
  end

  def teardown
    DatabaseCleaner.clean
  end
end
