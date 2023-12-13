const API_BASE_URL = 'http://localhost:3000';

async function addmenu() {
    const Customer_name = document.getElementById('name').value;
    const Address = document.getElementById('address').value;
    const Phone_Number = document.getElementById('phone').value;
    const Order = document.getElementById('food').value;
    const Order_Quantity = document.getElementById('quantity').value;
    try {
        await fetch (`${API_BASE_URL}/menu`, {
            method : 'POST',
            headers: {
               'Content-Type':'application/json' 
            },
            body: JSON.stringify ({Customer_name, Address, Phone_Number, Order, Order_Quantity }),
        });
        alert("Submit is Successfully, Thankyou for your contact us")
    } catch (err) {
        console.log(err);
    }
}
