// Viết hàm trả về số lượng xuất hiện của 1 kí tự trong chuỗi
function demkytu(str:string, char:string): number {
    let count:number = 0;
    for (const c of str) {
        if(c === char) {
            count ++;
        }
    }
    return count;
}

console.log(demkytu("Hello", "l"));
