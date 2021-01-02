# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text             not null
#  uploader_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Video < ApplicationRecord

    has_many :comments,
        primary_key: :id,
        foreign_key: :video_id,
        class_name: :Comment

    has_many :likes,
        primary_key: :id,
        foreign_key: :video_id,
        class_name: :Like
  
end