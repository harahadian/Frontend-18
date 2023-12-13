const API_BASE_URL = 'http://localhost:3000';

async function cekorder(event) {
    const name = document.querySelector("name");
    fetch(`${API_BASE_URL}/menu`)
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