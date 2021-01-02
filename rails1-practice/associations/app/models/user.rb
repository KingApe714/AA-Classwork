# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  username   :string           not null
#  password   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class User < ApplicationRecord

    has_many :comments,
        primary_key: :id,
        foreign_key: :commenter_id,
        class_name: :Comment

    has_many :likes,
        primary_key: :id,
        foreign_key: :liker_id,
        class_name: :Like
end