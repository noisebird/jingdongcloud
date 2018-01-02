/*插入排序
   每次将一个待排序的数据元素，插入到前面已经排好序的数列中的适当位置，使数列依然有序；直到待排序数据元素全部插入完为止。 
 */

let sort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let index = i;
        let temp = arr[i];
        // 当前元素比前面元素小时，当前元素与前面元素交换位置，知道找到合适位置，记录下位置，循环结束后将位置赋予保留的比较元素交换
        while (index > 0 && temp < arr[index - 1]) {
            arr[index] = arr[index - 1];
            index--;
        }
        arr[index] = temp;
    }
    return arr;
}

console.log(sort([9, 8, 7, 6, 5, 4, 3, 2, 10]))