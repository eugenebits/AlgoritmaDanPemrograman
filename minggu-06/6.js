function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Tukar elemen
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        n--; // Kurangi panjang array yang perlu diperiksa
    } while (swapped);

    return arr;
}

// Contoh penggunaan
let array = [5, 3, 8, 4, 2];

console.log("Array sebelum diurutkan:");
for (let i = 0; i < array.length; i++) {
    console.log("Index " + i + " = " + array[i]);
}

let sortedArray = bubbleSort(array);

console.log("\nArray setelah diurutkan:");
for (let i = 0; i < sortedArray.length; i++) {
    console.log("Index " + i + " = " + sortedArray[i]);
}
