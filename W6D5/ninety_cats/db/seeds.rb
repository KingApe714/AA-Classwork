# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
kat = Cat.create([{name: "Jona", color: "brown", birth_date: "2010-10-5", sex: "m", description: "the greatest"},
                {name: "Mike", color: "black", birth_date: "2011-9-12", sex: "m", description: "not so great"},
                {name: "Jada", color: "white", birth_date: "2013-2-2", sex: "f", description: "the whitest"}
                ])