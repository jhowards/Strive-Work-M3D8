window.onload = async () => {};

createProduct = () => {
  let productName = document.getElementById("productNameForm").value;
  let productImage = document.getElementById("productImageForm").value;
  let productDescription = document.getElementById(
    "productDescriptionForm"
  ).value;
  let productPrice = document.getElementById("productPriceForm").value;
  let randomID = makeid(20);
  console.log(randomID);

  let product = {
    brand: productName,
    imageUrl: productImage,
    description: productDescription,
    price: productPrice,
    userId: randomID,
  };

  console.log(product);

  sessionStorage.setItem("product", JSON.stringify(product));
};

clearProducts = () => {
  sessionStorage.clear();
  console.log("Storage cleared!");
};

function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
