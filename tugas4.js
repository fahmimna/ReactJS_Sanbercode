//Soal 1
{
    console.log("No. 1");
    for (let i = 0; i <= 9; i++) {
        console.log(i);
      }      
}
console.log("");
//Soal 2
{
    console.log("No. 2");
    for (let i = 1; i <= 9; i += 2) {
        console.log(i);
      }           
}
console.log("");
//Soal 3
{
    console.log("No. 3");
    for (let i = 0; i <= 9; i += 2) {
        console.log(i);
      }           
}
console.log("");
//Soal 4
{
    console.log("No. 4");
    let array1 = [1, 2, 3, 4, 5, 6];
    let element = array1[5];
    console.log(element);
}
console.log("");
//Soal 5
{
    console.log("No. 5");
    let array2 = [5, 2, 4, 1, 3, 5];
    array2.sort(function(a, b) {
    return a - b;
    });
    console.log(array2);
}
console.log("");
//Soal 6
{
    console.log("No. 6");
    let array3 = ["selamat", "anda", "melakukan", "perulangan", "array", "dengan", "for"];
    for (let i = 0; i < array3.length; i++) {
      console.log(array3[i]);
    }    
}
console.log("");
//Soal 7
{
    console.log("No. 7");
    let array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i = 0; i < array4.length; i++) {
      if (array4[i] % 2 === 0) {
        console.log(array4[i]);
      }
    }    
}
console.log("");
//Soal 8
{
    console.log("No. 8");
    let kalimat = ["saya", "sangat", "senang", "belajar", "javascript"];
    let kalimatGabung = kalimat.join(" ");
    console.log(kalimatGabung);       
}
console.log("");
//Soal 9
{
    console.log("No. 9");
    var sayuran = [];
    sayuran.push("Kangkung");
    sayuran.push("Bayam");
    sayuran.push("Buncis");
    sayuran.push("Kubis");
    sayuran.push("Timun");
    sayuran.push("Seledri");
    sayuran.push("Tauge");

    console.log(sayuran);
}