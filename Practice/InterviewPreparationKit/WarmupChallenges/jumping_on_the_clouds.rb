# frozen_string_literal: true

input = $stdin.read
clouds = input.split("\n").last.split.map(&:to_i)

result = 0

index = 0

while index < clouds.size - 1
  result += 1

  if clouds[index + 2]&.zero?
    index += 2
    next
  end

  if clouds[index + 1]&.zero?
    index += 1
    next
  end
end

puts result
