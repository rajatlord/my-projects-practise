#collections : counter , namedupdate ,orderdict  , defaultdict and deque 

# from collections import Counter

# a = "aaaaaabbbcc"
# my_counter = Counter(a)
# print(my_counter)
# print(list(my_counter.elements()))

# #let's move 
# from collections import namedtuple

# point = namedtuple('point', 'x,y')
# pt = point(1,-3)
# print(pt.x , pt.y)   

# #another
# from collections import OrderedDict
# OrderedDict = OrderedDict()
# OrderedDict['a'] = 1
# OrderedDict['b'] = 2
# OrderedDict['c'] = 3
# OrderedDict['d'] = 4
# print(OrderedDict)

# #defaultdict
# from collections import defaultdict
# d = defaultdict(int)
# d['a'] = 1
# d['b'] = 2
# print(d['c'])

# #deque here we can add form both side and remove too also we can rotate them 
# from collections import deque
# d = deque()
# d.append(1)
# d.append(2)
# d.appendleft(3)
# print(d)
# d.extend([3 ,4, 5])
# print(d)


# # let start with itertools 
# itertools: product, permutations, combinations, accumulate, groupby, and infinite iterators
# from itertools import product
# from itertools import product

# # Example 1: Product of two iterables with repeat=1
# iterable1 = [1, 2, 3]
# iterable2 = ['a', 'b']

# result1 = list(product(iterable1, iterable2))
# print(result1)
# # Output:
# # [(1, 'a'), (1, 'b'), (2, 'a'), (2, 'b'), (3, 'a'), (3, 'b')]

# # Example 2: Product of two iterables with repeat=2
# result2 = list(product(iterable1, iterable2, repeat=2))
# print(result2)
# # Output:
# # [(1, 'a', 1, 'a'), (1, 'a', 1, 'b'), (1, 'a', 2, 'a'), (1, 'a', 2, 'b'), ...

# let's start with itertools 
# from itertools import permutations 
# a = [1,2,3]
# perm = permutations(a)
# print(list(perm))

# # start with combnation
# from itertools import combinations , combinations_with_replacement
# a = [1,2,3,4]
# comb = combinations(a , 2)
# print(list(comb))
# comb_wr = combinations_with_replacement(a,2)
# print(list(comb_wr))

# # start with accumlate
# from itertools import accumulate 
# import operator
# a = [1,2,3,4]
# #here can we use op like max mul search google
# acc = accumulate(a)
# print(a)
# print(list(acc))

# let's start with lambda
# # lambda arguments: expression
# add10 = lambda x: x + 10
# print(add10(5))

# def add10_func(x):
#      return x + 10

# mult = lambda x,y: x*y
# print(mult(2,7))

# points2d = [(1,2),(15,1),(5,-1),(10,4)]
# points2d_sorted = sorted(points2d)

# print(points2d)
# print(points2d_sorted)



# let's sort with with lambda 
# points2d = [(1,2),(15,1),(5,-1),(10,4)]
# print(points2d)
# def  sort_by_y(x):
#         return x[1]

# points2d_sorted = sorted(points2d , key=sort_by_y)
# print(points2d_sorted)
# points2d_sorted = sorted(points2d , key=lambda x: x[1])
# print(points2d_sorted)

# # map(func, seq)
# a = [1,2,3,4,5]
# b = map(lambda x:x*a , a)
# print(list(b))

# d   = map(lambda x:x*2 , a)
# print(list(d))

# c = [x*y for x, y in zip(a, a)]
# print(c)


# #filter
# a = [1, 2, 3, 4, 5, 6]
# b = filter(lambda x: x%2==0, a)
# print(list(b))

# c = [x for x in a if x%2==0 ]
# print(c)

# reduce
# from functools import reduce
# a = [1,2,3,4]

# product_a = reduce(lambda x,y:x*y , a )
# print(product_a)



# # let's write about experction and error 
# x =-5
# if x <0:
#     raise Exception ('x should be postive')

# x =-5
# assert (x==0), 'x is not positive'

try:
    a= 5/0
    b = a + 4
except ZeroDivisionError as e:
    print(e)
except TypeError as e : 
     print(e)
else:
     print('everything is fine')
finally:
     print('cleaning up......')