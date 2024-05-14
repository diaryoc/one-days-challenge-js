//
// imho the cleanest and most elegant solution I found (mentored by bolivier)
// pasting here for future reference
//
const BOOK_PRICE = 800;
const DISCOUNT = {
    5: .75 * BOOK_PRICE * 5,
    4: .8 * BOOK_PRICE * 4,
    3: .9 * BOOK_PRICE * 3,
    2: .95 * BOOK_PRICE * 2,
    1: BOOK_PRICE,
};

function cost (books) {
    let booksSet = [];
    // create a Set without duplicates and add its length to booksSet-array,
    // then remove all the set-elements from the initial array (books).
    // repeat until books is empty.
    // initial books: [1,2,1,1,3,4,5,3]
    // looping through...
    // booksSet       : [[1,2,3,4,5]]      -> [[1,2,3,4,5], [1,3]] -> [[1,2,3,4,5], [1,3], [1]]
    // (length)       : [5]                -> [5, 2]               -> [5, 2, 1]
    // books remaining: [1,1,3]            -> [1]                  -> []
    //
    while (books.length > 0) {
        booksSet.push(new Set(books).size);
        new Set(books).forEach((elem) => {
            books.splice(books.indexOf(elem), 1);
        });
    }

    // check for set pairs of 5 & 3 and replace with 4 & 4
    while (booksSet.includes(3) && booksSet.includes(5)) {
        booksSet.splice(booksSet.indexOf(3), 1);
        booksSet.splice(booksSet.indexOf(5), 1);
        booksSet.push(4, 4);
    }

    // add up all sets, based on the DISCOUNT list
    let total = 0;
    booksSet.forEach((elem) => (total += DISCOUNT[`${elem}`]));

    return total;

}

console.log(cost([1,1,2,2,3,3,4,5]));