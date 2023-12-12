
const pilihanFood = document.getElementById("food");
const pilihanJumlahInput = document.getElementById("quantity");
const hitungButton = document.getElementById("hitungButton");
const hasilPesanan = document.getElementById("hasilPesanan");
  
hitungButton.addEventListener("click", () => {
  const pilihanJumlah = parseFloat(pilihanJumlahInput.value);
  const food = pilihanFood.value;
  let tarifPerFood;
  
    // Menentukan tarif per 1 porsi berdasarkan makanan
    switch (food) {
      case "Ayam Bekakak":
        tarifPerFood = 100000; // Ganti dengan tarif per food
        break;
      case "Nasi Tumpeng":
        tarifPerFood = 210000; // Ganti dengan tarif per food
        break; 
      case "Roti Buaya":
        tarifPerFood = 90000; // Ganti dengan tarif per food
        break;
      case "Sate Ayam Madura":
        tarifPerFood = 75000; // Ganti dengan tarif per food
        break;          
      case "Gudeg":
        tarifPerFood = 125000; // Ganti dengan tarif per food
        break;
      case "Rawon Daging Sapi":
        tarifPerFood = 150000; // Ganti dengan tarif per food
        break;
      default:
        tarifPerFood = 0; // Jika tidak ada tujuan yang dipilih
    }
  
    if (tarifPerFood === 0 || isNaN(pilihanJumlah)) {
      hasilPesanan.textContent =
        "Select the menu and enter the desired order quantity.";
    } else {
      alert("Wait, we're calculating the total payment. ^^");
      const totalHarga = pilihanJumlah * tarifPerFood;
      hasilPesanan.textContent = `Total payment for ${food}: Rp ${totalHarga}`;
    }
  });
  