<script>
  function openOrderForm(productName) {
    const orderWindow = window.open('', 'OrderWindow', 'width=500,height=500');

    orderWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <title>Order Form - ${productName}</title>
        <style>
          body {
            font-family: 'Poppins', sans-serif;
            background: linear-gradient(to right, #e0f7fa, #e8f5e9);
            padding: 2rem;
            color: #2e7d32;
          }
          h2 {
            text-align: center;
            color: #00796b;
          }
          form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            max-width: 100%;
          }
          label {
            font-weight: bold;
          }
          input, textarea {
            padding: 0.6rem;
            border: 1px solid #81c784;
            border-radius: 6px;
            font-size: 1rem;
            outline: none;
          }
          button {
            background: linear-gradient(to right, #4db6ac, #81c784);
            border: none;
            color: white;
            padding: 0.8rem;
            border-radius: 8px;
            font-weight: bold;
            cursor: pointer;
            transition: background 0.3s;
          }
          button:hover {
            background: linear-gradient(to right, #81c784, #4db6ac);
          }
        </style>
      </head>
      <body>
        <h2>Order Form - ${productName}</h2>
        <form>
          <label for="name">Name:</label>
          <input type="text" id="name" placeholder="Enter your name" required>
          
          <label for="phone">Phone Number:</label>
          <input type="tel" id="phone" placeholder="03xx-xxxxxxx" required>

          <label for="address">Address:</label>
          <textarea id="address" rows="4" placeholder="Enter your address" required></textarea>

          <button type="submit">Submit Order</button>
        </form>
      </body>
      </html>
    `);
    orderWindow.document.close();
  }

  // Modify all Add to Cart buttons to use the new function
  const buttons = document.querySelectorAll(".cart-btn");
  buttons.forEach((btn, index) => {
    const productName = `Product ${index + 1}`;
    btn.onclick = () => openOrderForm(productName);
  });
</script>
