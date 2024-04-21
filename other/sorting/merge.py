def merge(arr):
    n = len(arr)
    if n<2:
        return arr
    left = merge(arr[0:n//2])
    right = merge(arr[n//2:])

    return combine(left, right)

def combine(left, right):
    merged = []
    while len(left)>0 and len(right)>0:
        if left[0] > right[0]:
            merged.append(right[0])
            right.pop(0)
        else:
            merged.append(left[0])
            left.pop(0)
    for item in left:
        merged.append(item)
    for item in right:
        merged.append(item)
    return merged

arr = [2,3,4,13,32,5,1,32,2,4,3,21,23]
print(merge(arr))


