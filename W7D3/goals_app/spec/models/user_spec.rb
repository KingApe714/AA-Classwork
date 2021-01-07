require 'rails_helper'

RSpec.describe User, type: :model do
  
  describe "validates correctly" do 

    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_presence_of(:session_token) }
    it { should validate_length_of(:password).is_at_least(6) }

  end

  describe "associates correctly" do 

    it { should have_many(:goals)}

  end


  
end