def quick(arr):
    l = len(arr)
    if l<=1:
        return arr
    else:
        less = []
        more = []
        equal = []
        pivot = arr[0]
        for item in arr:
            if item<pivot:
                less.append(item)
            elif item>pivot:
                more.append(item)
            else:
                equal.append(item)
        arr = quick(less) + equal + quick(more)
        return arr

arr = [2,3,4,13,32,5,1,32,2,4,3,21,23]
print(quick(arr))
