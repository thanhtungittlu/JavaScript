var arr = [4,5,6,7,8]
arr.length = 15
for(var i=0 ; i < arr.length ; i++){  // Vòng này vẫn lặp 15 lần, dù thực tế chỉ có 5 phần tử 
    console.log(arr[i])
}

for (var i in arr){         // Vòng for in sẽ chỉ lặp các phần tử thực, nên chỉ lặp 5 lần
    console.log(i)
}