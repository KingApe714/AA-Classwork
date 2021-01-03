class Enrollment < ApplicationRecord

    belongs_to :user,
        primary_key: :id,
        foreign_key: :student_id,
        class: :User

    belongs_to :course,
        primary_key: :id,
        foreign_key: :course_id,
        class: :Course
end

# Enrollment
# Open the model, app/models/enrollment.rb. Add the associations inside the currently empty class. You will need associations for User and Course.

# After you are done adding the associations, you should be able to execute Enrollment.first.user and Enrollment.first.course in the rails console. These commands should return the associated user and course for the first enrollment.