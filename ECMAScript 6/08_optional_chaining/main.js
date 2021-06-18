var obj = {
    name: "Tùng",
    cat: {
        cat1: {
            name: "Thương",
        }
    }
};

// if ( obj.cat && obj.cat.cat1 ) { // Kiểm tra xem tồn tại hay không
//     console.log(obj.cat.cat1.name)
// }

console.log(obj?.cat?.cat1?.name)

// ?. để kiểm tra xem tồn tại hay không




