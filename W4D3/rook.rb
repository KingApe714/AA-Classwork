require_relative "Piece.rb"
require_relative "slideable.rb"
class Rook < Piece
    include Slideable
    
    attr_reader :symbol
    def initialize
        @symbol = :R
    end
    
    def move_dirs
        horizontal_and_vertical_dirs
    end
end