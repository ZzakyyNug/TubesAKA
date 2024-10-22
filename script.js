// Data siswa per kecamatan
const data = [
    { namaKecamatan: "Purwokerto Barat", jumlahSiswa: 1200 },
    { namaKecamatan: "Purwokerto Timur", jumlahSiswa: 1500 },
    { namaKecamatan: "Purwokerto Utara", jumlahSiswa: 1400 },
    { namaKecamatan: "Banyumas", jumlahSiswa: 1000 },
    { namaKecamatan: "Ajibarang", jumlahSiswa: 900 }
];

// Fungsi untuk memuat data ke tabel
function loadTableData() {
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = ""; // Kosongkan isi tabel
    data.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${item.namaKecamatan}</td><td>${item.jumlahSiswa}</td>`;
        tableBody.appendChild(row);
    });
}

// Fungsi untuk mengurutkan data menggunakan Bubble Sort
function bubbleSort(dataArray) {
    let n = dataArray.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (dataArray[j].namaKecamatan.localeCompare(dataArray[j + 1].namaKecamatan) > 0) {
                // Tukar jika elemen yang ditemukan lebih besar
                [dataArray[j], dataArray[j + 1]] = [dataArray[j + 1], dataArray[j]];
            }
        }
    }
}

// Fungsi untuk mencari jumlah siswa berdasarkan nama kecamatan menggunakan Linear Search
function searchData() {
    const input = document.getElementById("search-input").value;
    const resultDiv = document.getElementById("search-result");
    const found = data.find(item => item.namaKecamatan.toLowerCase() === input.toLowerCase());
    
    if (found) {
        resultDiv.innerHTML = `Jumlah siswa di ${found.namaKecamatan}: ${found.jumlahSiswa}`;
    } else {
        resultDiv.innerHTML = "Kecamatan tidak ditemukan";
    }
}

// Event listeners
document.getElementById("sort-button").addEventListener("click", () => {
    bubbleSort(data);
    loadTableData();
});
document.getElementById("search-button").addEventListener("click", searchData);

// Memuat data awal
loadTableData();
