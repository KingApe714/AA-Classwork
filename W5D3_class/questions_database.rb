require 'sqlite3'
require 'singleton'

class QuestionsDatabase < SQLite3::Database
    include Singleton

    def initialize
        super('questions.db')
        self.type_translation = true
        self.results_as_hash = true
    end
end

class Questions
    attr_accessor :id, :title, :body, :author_id
    def self.find_by_id(num)
        data = QuestionsDatabase.instance.execute("SELECT * FROM questions WHERE id = num")

    end

    def initialize(options)
        @id = options['id']
        @title = options['title']
        @body = options['body']
        @author_id = options['author_id']
    end

end

class Users
    attr_accessor :id, :fname, :lname
    def initialize(options)
        @id = options['id']
        @fname = options['fname']
        @lname = options['lname']
    end


end

class QuestionFollows

end

class Replies

end

class QuestionLikes

end