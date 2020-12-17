require_relative "Piece.rb"
require_relative "slideable.rb"

class Queen < Piece
    include Slideable
    attr_reader :symbol
    def initialize
        @symbol = :Q
    end
    
    def move_dirs
        horizontal_and_vertical_dirs
        diagonal_dirs
    end
        
    
end