require_relative "cursor.rb"

class Display
    def initialize
        @board = Board.new
        @cursor = Cursor.new([0,0], @board)
    end

    def render 
        (0...@grid.length).each do |idx|
            r = (8 - idx).to_s + "| "
            (0...@grid.length).each do |j|
                r += "#{@grid[idx][j]} | "
            end
            puts r 
            puts "--------------------------"
        end
        puts "   A  B  C  D  E  F  G  H"
    end
end