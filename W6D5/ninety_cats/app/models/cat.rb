require 'action_view'
class Cat < ApplicationRecord
    ActionView::Helpers::DateHelper
    validates :birth_date, :color, :name, :sex, :description, presence: true
    validates :color, inclusion: {in: ['balck', 'brown', 'white', 'tabby', 'orange',
                                        'calico', 'grey']}
    validates :sex, inclusion: {in: ['m', 'f']}

    # def intialize(birth_date, color, name, sex, description)
    #     @birth_date = birth_date
    #     @color = color
    #     @name = name
    #     @sex = sex
    #     @description = description
    # end

    def age
        date = Date.today.to_s
        yr = date.split("-")[0]
        yr.to_i - self.birth_date.to_s.split("-")[0].to_i
    end

end

#kat = Cat.new('2005-01-20', 'brown', 'eric', 'm', 'cat')