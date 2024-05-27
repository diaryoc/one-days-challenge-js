//
// This is only a SKELETON file for the 'Binary Search' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function find(array, num){
    if(array.length == 0) {
        throw new Error('Value not in array');
    }

    let mid = Math.floor(array.length / 2);
    if(array[mid] === num) {
        return mid;
    }
    else if(array[mid] < num) {
        return find(array.slice(mid+1), num) + mid+1;
    }
    else {
        return find(array.slice(0, mid), num);
    }
};

console.log(find([4, 8, 12, 16, 23, 28, 32],23))