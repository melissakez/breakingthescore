// Breaking the Records

// input: [50, 30, 65, 20, 75, 80, 60, 40, 50, 85, 15];

// output:
// rekor terendah: 3
// rekor tertinggi: 4

arrayNumber = [ 50, 30, 65, 20, 75, 80, 60, 40, 50, 85, 15 ];

let min = [];
let max = [];

min.push(arrayNumber[0]);
max.push(arrayNumber[0]);

for (i = 0; i < arrayNumber.length; i++)
{
    if (min[min.length - 1] > arrayNumber[i]) // karena length selalu hitung dari 1, sedangkan yg mau dihitung array (hitung dari 0) maka harus -1
    {
        min.push(arrayNumber[i]);
    }

    if (max[max.length - 1] < arrayNumber[i])
    {
        max.push(arrayNumber[i]);
    }
}

console.log(`rekor terendah: ${min.length}\nrekor tertinggi: ${max.length}`)
