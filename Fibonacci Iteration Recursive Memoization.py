###### recursive runtime: Exponential - O(2^N)

def fibonacci(n):
  if n < 0:
    ValueError("Input 0 or greater only!")
  if n <= 1:
    return n
  return fibonacci(n - 1) + fibonacci(n - 2)

fibonacci(3)
# 2
fibonacci(7)
# 13
fibonacci(0)
# 0

########### iterative below
def fibonacci(n):
  if n == 0:
    return 0
  if n == 1:
    return 1
  fiblist = [0, 1]
  while n > len(fiblist) - 1:
    next_fib = fiblist[-1] + fiblist[-2]
    fiblist.append(next_fib)
  return fiblist[n]

# test cases
print(fibonacci(3) == 2)
print(fibonacci(7) == 13)
print(fibonacci(0) == 0)

########## Memoization.

table = {}

def fibonacci(n):
	# base cases
	if n == 1:
		return n
	elif n == 0:
		return n
	elif n in table:
		return table[n]
	else:
		# recursive step
		data = fibonacci(n - 1) + fibonacci(n - 2)
		table[n] = data
		print("Recursive call with {0} as input".format(n))
		return data

print(table)
fibonacci(3)
print("End of first fibonacci !")
print(table)
fibonacci(12)
print(table)
#fibonacci_runtime = "2^N"
