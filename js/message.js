





function addorder(event) {
    event.preventDefault();
    // const Noid = document.querySelector("#id");
    const NamaPemesan = document.querySelector("name");
    const AlamatPemesan = document.querySelector("address");
    const NoTeleponPemesan = document.querySelector("phone");
    const MakananPemesan = document.querySelector("food");
    const JumlahPesanan = document.querySelector("quantity");
  
    fetch(`${BASE_URL}/InputOrder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // No_Id: Noid.value,
        Customer_Name: NamaPemesan.value,
        Address: AlamatPemesan.value,
        Phone_Number: NoTeleponPemesan.value,
        Order: MakananPemesan.value,
        Order_Quantity: JumlahPesanan.value,
      }),
    }).then(response => response.json())
      .then(response => {
        alert(`Your Order Has Been Saved, Your Id Order Is ${response.No_Id}`);
        // Noid.value = ''
        NamaPemesan.value = '';
        AlamatPemesan.value = '';
        NoTeleponPemesan.value = '';
        MakananPemesan.value = '';
        JumlahPesanan.value = '';
      }).catch((error) => {
      console.error(error);
    });
  }
  
  function cekorder(event) {
    const idOrder = document.querySelector("idOrder");
    fetch(`${BASE_URL}/message/${idOrder.value}`)
    .then(response => response.json())
    .then(response => {
    if(response.data){
      const {
        Customer_Name,
        Address,
        Phone_Number,
        Order,
        Order_Quantity,
      } = response.data;
       document.querySelector("content-order").innerHTML = `
       <table>
       <h2>Customer Data</h2>
       <table class="usertbl">
           <tr>
               <th>Data</th>
               <th>value</th>
           </tr>
           <tr>
               <td>Customer Name</td>
               <td>${Customer_Name}</td>
           </tr>
           <tr>
               <td>Address</td>
               <td>${Address}</td>
           </tr>
           <tr>
               <td>Phone Number</td>
               <td>${Phone_Number}</td>
           </tr>
           <tr>
               <td>Order</td>
               <td>${Order}</td>
           </tr>
           <tr>
               <td>Order Quantity</td>
               <td>${Order_Quantity}</td>
           </tr>
       </table>
       `;
      }else{
        alert("Data was not found");
      }  
      })
      .catch((error) => {
      console.error(error);
    });
}