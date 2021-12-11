# frozen_string_literal: true

input = $stdin.read
socks = input.split("\n").last.split

result = socks.uniq.map { |sock| socks.count(sock) / 2 }.sum

puts result
