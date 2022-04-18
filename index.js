$(".owl-carousel").owlCarousel({
  center: true,
  items: 2,
  loop: true,
  margin: 10,
  responsive: {
    600: {
      items: 4,
    },
  },
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
