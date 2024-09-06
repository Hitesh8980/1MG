**1mg Clone - Back-End**

Welcome to the back-end of the 1mg Clone project! 🌟

This section of the project handles all the behind-the-scenes work. It manages the data, handles requests, and ensures everything on the website runs smoothly.

**🚀 Live API**

You can explore the live API here: View API Documentation

**🛠️ Technologies Used**

Here’s a quick overview of the key technologies used to build the back-end:

Node.js: A JavaScript runtime used to build the server-side of the application.

Express: A web framework for Node.js that makes it easier to handle HTTP requests and responses.

MongoDB Atlas: A cloud-based database service where all the data for the website is stored.

**📋 How It Works**

Server Setup:

The server is created using Node.js and Express.

It listens for requests from the front-end (the part you interact with) and sends back responses.

1.Database:

MongoDB Atlas is used to store and manage data like product information, user details, and order history.

It allows the server to quickly fetch and update data as needed.

2.API Endpoints:

The server provides various API endpoints that the front-end uses to get and send data.

For example, endpoints to get product details, search for products, and place orders.

**📋 How to Run the Project Locally**

If you want to run this back-end on your local machine, follow these steps:

Clone the Repository:

Click on the "Code" button and copy the link.

Open your terminal or command prompt.

Type git clone <link> and press Enter.

Navigate to the Project Folder:

cd Back-end

Install Dependencies:

Type npm install and press Enter to install all the necessary packages.

Set Up Environment Variables:

Create a .env file in the root of the project.
Add your MongoDB Atlas connection string to this file using the following format:

Copy code
MONGO_URL=your-mongodb-atlas-connection-string

PORT=your-port-number (e.g., 3010)

secret_key=your-secret-key (for JWT or other encryption)

key_id=your-razorpay-key-id

key_secret=your-razorpay-key-secret


Run the Server:

Type npm run dev and press Enter to start the server.

Test the API:

Open your browser or API testing tool and go to http://localhost:5000 to see the API in action.

**📬 Contact**

If you have any questions or need help, don’t hesitate to reach out:

Email: hitesh.sharma176@gmail.com

GitHub: https://github.com/Hitesh8980

**💬 Feedback

Your feedback is important! Please let me know if you have any suggestions or questions.

Thank you for checking out the back-end of the 1mg Clone! 😊

