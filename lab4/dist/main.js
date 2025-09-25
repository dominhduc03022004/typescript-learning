"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products = [
    {
        id: 1,
        name: "Iphone5",
        price: 5000000,
        category: "Dien thoai",
    },
    {
        id: 2,
        name: "Iphone6",
        price: 6000000,
        category: "Dien thoai",
    },
    {
        id: 3,
        name: "Iphone7",
        price: 7000000,
        category: "Dien thoai",
    },
    {
        id: 4,
        name: "Macbook",
        price: 50000000,
        category: "May tinh",
    },
    {
        id: 5,
        name: "May tinh HP",
        price: 20000000,
        category: "May tinh",
    },
];
function filterByCategory(list, category) {
    return list.filter((p) => p.category === category);
}
function calculateTotalPrice(list) {
    return list.reduce((sum, p) => sum + p.price, 0);
}
function findMinMax(list) {
    let min = list[0];
    let max = list[0];
    list.forEach((p) => {
        if (p.price < min.price)
            min = p;
        if (p.price > max.price)
            max = p;
    });
    return { min, max };
}
console.log("Sản phẩm thuộc danh mục Điện thoại:", filterByCategory(products, "Dien thoai"));
console.log("Tổng tất cả giá trị sản phảm trong danh sach là:", calculateTotalPrice(products));
console.log("Sản phẩm rẻ nhất & đắt nhất:", findMinMax(products));
