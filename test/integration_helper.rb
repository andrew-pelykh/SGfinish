require 'test_helper'
require 'capybara/rails'

class IntegrationSupport < ActiveSupport::TestCase
  include Rails.application.routes.url_helpers
  include Capybara::DSL
  Capybara.default_wait_time = 5

  def require_js
    Capybara.current_driver = :webkit
  end

  def teardown
    super
    Capybara.current_driver = nil
  end

  def signin(user)
    visit signin_path
    fill_in "Email",    with: user.email.upcase
    fill_in "Password", with: user.password
    click_button "Sign in"
  end
end
