// 1. Nhập vào một mảng các số nguyên, tìm cặp hai số liền kề có tích lớn nhất và trả về kết quả của phép nhân 2 số đó.
// Ví dụ: INPUT là [2, 3, -5, -2, 4] thì OUTPUT là 10 (cặp -5 và -2 có tích là 10)
// [JavaScript] Syntax Tips
// Prints help message to the console
// Returns a string
// function adjacentElementsProduct(inputArray) {
    
// }

let inputArray = prompt('Nhập vào 1 mảng: ');

function adjacentElementsProduct(array) {
    let max = 0;
    array = array.split(",");
    for (let i = 0; i < array.length; i++){
        if ((array[i] * array[i + 1]) > max){
            max = (array[i] * array[i + 1]);
        }
    }
    return max;
}

console.log(adjacentElementsProduct(inputArray));

// 2. Có một nhóm người đang đứng thành một hàng, để chia ra làm 2 đội từ hàng người thì quản trò chia như sao. Người đứng thứ nhất vào Team 1, người đúng thứ hai vào Team 2, người đứng thứ ba vào lại Team 1, cứ tiếp tục như thế cho đến người cuối cùng.
// Viết chương trình có đầu vào là một mảng chưa cân nặng của tất cả mọi người theo thứ tự hàng ban đầu và yêu cầu trả về mảng chưa tổng cân nặng của 2 team.

// Ví dụ: INPUT [60, 40, 55, 75, 64] thì OUTPUT là [179, 115]
// [JavaScript] Syntax Tips
// Prints help message to the console
// Returns a string
// function alternatingSums(a) {
    
// }

let inputArray2 = prompt('Nhập vào 1 mảng 2: ');

function alternatingSums(array2) {
    let team1 = [];
    let team2 = [];
    array2 = array2.split(",");
    for (let i = 0; i < array2.length; i++) {
        if (i % 2 == 0) {
            team1.push(Number(array2[i]));
        } else {
            team2.push(Number(array2[i]));
        }
    }
    const reducer = (total, newValue) => total + newValue;
    team1.reduce(reducer);
    team2.reduce(reducer);
    console.log([team1.reduce(reducer), team2.reduce(reducer)])
}

alternatingSums(inputArray2);







