# frozen_string_literal: true

input = $stdin.read
lines = input.split("\n")
string = lines.first
number = lines.last.to_f

result = 0

result += string.count('a') * (number / string.size).floor
result += string[0...(number % string.size)].count('a')

puts result
