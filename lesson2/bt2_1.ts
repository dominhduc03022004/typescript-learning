// Viết 1 hàm tính tổng nhiều số (không biết trước số lượng tham số), sử dụng rest parameter
function sum(...nums:number[]):number {
    let total:number = 0;
    for (const num of nums) {
        total += num;
    }
    return total;
}

console.log(sum(1,2,3));
console.log(sum(1,2,3,4,5));
