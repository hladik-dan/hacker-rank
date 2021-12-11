# frozen_string_literal: true

input = $stdin.read
path = input.split("\n").last.chars

result = 0

altitude = 0
in_valley = false

path.each do |step|
  altitude += 1 if step == 'U'
  altitude -= 1 if step == 'D'

  if altitude.negative? && in_valley == false
    result += 1
    in_valley = true
  end

  in_valley = false if altitude.zero?
end

puts result
