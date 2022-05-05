fetch("https://nikhild12377-grocerymart.herokuapp.com/data", { method: "get" })
  .then((data) => data.json())
  .then((res) => {
    res.map((item) => {
      document.getElementById(
        "items"
      ).innerHTML += `<option value=${item.standard}>${item.standard}</option>`;
    });
  });

document.querySelector(".form").addEventListener("submit", async (event) => {
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
    await fetch(
      `https://nikhild12377-grocerymart.herokuapp.com/register`,
      requestOptions
    )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  } catch (error) {
    console.error(error);
  }
  window.location.replace("/success.html");
});
