class Course < ApplicationRecord
    
    has_many :enrollments,
        primary_key: :id,
        foreign_key: :course_id,
        class: :Enrollment

    has_many :enrolled_students,
        through: :enrollments,
        source: :user
end


# Course
# Add enrollments and enrolled_students associations. You can infer how to test these based on our previous work.

# Now, things get tricky. Add an association for prerequisite. This should return a course's prereq (if it has one).

# Finally, add an instructor association to Course. This will point to a User object. Note that Course is now related to User in two ways: instructor and enrolled_students.