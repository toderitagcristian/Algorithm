import utils
import sorts

def by_title_ascending(book_a, book_b):
  return book_a['title_lower'] > book_b['title_lower']

def by_author_ascending(book_a, book_b):
  return book_a['author_lower'] > book_b['author_lower']

def by_total_length(book_a, book_b):
  return len(book_a['author_lower']) + len(book_a['title_lower']) > len(book_b['author_lower']) + len(book_b['title_lower'])

bookshelf = utils.load_books('books_small.csv')
bookshelf_v1 = bookshelf.copy()
bookshelf_v2 = bookshelf.copy()

long_bookshelf = utils.load_books('books_large.csv')
long_bookshelf_v1 = long_bookshelf.copy()

#### Sorts on bookshelf

#sort_1 = sorts.bubble_sort(bookshelf, by_title_ascending)
# for book in sort_1:
  # print(book['title'])

print("\n-----------Start of Bubble Sort /w by_author_ascending on bookshelf_v1\n")
sort_2 = sorts.bubble_sort(bookshelf_v1, by_author_ascending)
# for book in sort_2:
  # print(book['author'])

print("\n-----------Start of Quick Sort /w by_author_ascending on bookshelf_v2\n")
sorts.quicksort(bookshelf_v2, 0, len(bookshelf_v2) - 1, by_author_ascending)
print("Quik sort: There were {0} swaps".format(sorts.quick_swaps))
# for book in bookshelf_v2:
  # print(book['author'])  

#### Sorts on long_bookshelf  
print("\n-----------Start of Bubble Sort /w by_total_length on long_bookshelf\n")
sorts.bubble_sort(long_bookshelf, by_total_length)

print("\n-----------Start of Quick Sort /w by_total_length on long_bookshelf_v1\n")
sorts.quicksort(long_bookshelf_v1, 0, len(long_bookshelf_v1)-1, by_total_length)
print("Quik sort: There were {0} swaps".format(sorts.quick_swaps))


####### Statistics :

# -----------Start of Bubble Sort /w by_author_ascending on bookshelf_v1

# Bubble sort: There were 24 swaps

# -----------Start of Quick Sort /w by_author_ascending on bookshelf_v2

# Quik sort: There were 12 swaps
# -----------Start of Bubble Sort /w by_total_length on long_bookshelf

# Bubble sort: There were 1092069 swaps
# -----------Start of Quick Sort /w by_total_length on long_bookshelf_v1

# Quik sort: There were 8143 swaps


