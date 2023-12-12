const API_BASE_URL = 'http://localhost:3300';

async function addcontact() {
    const Customer_name = document.getElementById('name').value;
    const Email = document.getElementById('email').value;
    const Phone_Number = document.getElementById('phone').value;
    const Subject = document.getElementById('subject').value;
    const Message = documen.getElementById('message').value;
    try {
        await fetch (`${API_BASE_URL}/contact`, {
            method : 'POST',
            headers: {
               'Content-Type':'application/json' 
            },
            body: JSON.stringify ({Customer_name, Email, Phone_Number, Subject, Message }),
        });
        alert("Submit is Successfully, Thankyou for your contact us")
    } catch (err) {
        console.log(err);
    }
}

async function addorder() {
    const Customer_name = document.getElementById('name').value;
    const Address = document.getElementById('address').value;
    const Phone_Number = document.getElementById('phone').value;
    const Order = document.getElementById('food').value;
    const Order_Quantity = parseInt(document.getElementById('quantity').value);
    try {
        await fetch (`${API_BASE_URL}/order`, {
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
