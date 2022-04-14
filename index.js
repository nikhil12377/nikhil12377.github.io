document.querySelector(".form").addEventListener("submit", (event) => {
  event.preventDefault();

  try {
    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;
    const shop = {
      name: name,
      number: number,
      address: address,
      pincode: pincode,
    };
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(shop),
    };
    fetch(
      `https://nikhild12377-grocerymart.herokuapp.com/register`,
      requestOptions
    );

    window.location.replace("/success.html");
  } catch (error) {
    console.error(error);
  }
});
