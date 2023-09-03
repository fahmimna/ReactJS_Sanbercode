//Soal 1
{
    function cetakFunction() {
        return "Hallo Nama saya Fahmi Malik Namus Akbar";
      }      
    console.log(cetakFunction());
}
console.log("");
//Soal 2
{
    function myFunction(angka1, angka2) {
        return angka1 + angka2;
      }
      let angka1 = 20
      let angka2 = 7
      let output = myFunction(angka1, angka2)
      console.log(output)      
}
console.log("");
//Soal 3
{
    const Hello = () => "Hello";
    console.log(Hello());
}
console.log("");
//Soal 4
{
    let obj = {
        nama: "John",
        umur: 22,
        bahasa: "Indonesia"
      };
      
      console.log(obj.bahasa);          
}
console.log("");
//Soal 5
{
    let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku", 1992];
    let objDaftarPeserta = {
        nama: arrayDaftarPeserta[0],
        jenisKelamin: arrayDaftarPeserta[1],
        hobi: arrayDaftarPeserta[2],
        tahunLahir: arrayDaftarPeserta[3],
    };
    console.log(objDaftarPeserta);   
}
console.log("");
//Soal 6
{
    const buah = [
        {
          nama: "Nanas",
          warna: "Kuning",
          adaBijinya: false,
          harga: 9000,
        },
        {
          nama: "Jeruk",
          warna: "Oranye",
          adaBijinya: true,
          harga: 8000,
        },
        {
          nama: "Semangka",
          warna: "Hijau & Merah",
          adaBijinya: true,
          harga: 10000,
        },
        {
          nama: "Pisang",
          warna: "Kuning",
          adaBijinya: false,
          harga: 5000,
        },
      ];
        
    const buahTanpaBiji = buah.filter((buah) => buah.adaBijinya === false);
    console.log(buahTanpaBiji);   
}
console.log("");
//Soal 7
{
    let phone = {
        name: "Galaxy Fold 5",
        brand: "Samsung",
        year: 2023
     }
     
     // Destructuring objek phone
     const { name, brand, year } = phone;
     
     // Menampilkan hasil destructuring
     console.log(name, brand, year);     
}
console.log("");
//Soal 8
{
    let dataBukuTambahan = {
        penulis: "john doe",
        tahunTerbit: 2020
      }
      
      let buku = {
        nama: "pemrograman dasar",
        jumlahHalaman: 172
      }
      
      let objOutput = {
        ...dataBukuTambahan, // Menambahkan properti dari objek 'dataBukuTambahan' ke 'objOutput'
        ...buku // Menambahkan properti dari objek 'buku' ke 'objOutput'
      }
      
      // Kode di bawah ini jangan dirubah atau dihapus
      console.log(objOutput);      
}
console.log("");
//Soal 9
{
    let mobil = {
        merk: "bmw",
        color: "red",
        year: 2002
      }
      
      const functionObject = (param) => {
        return param;
      }
      
      // Memanggil functionObject() dengan objek mobil sebagai argumen
      console.log(functionObject(mobil));      
}