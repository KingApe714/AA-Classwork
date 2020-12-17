require_relative "Piece.rb"
require_relative "slideable.rb"

class Bishop < Piece
    include Slideable
    attr_reader :symbol
    def initialize
        @symbol = :B
    end
    
    def move_dirs
        diagonal_dirs
    end

end