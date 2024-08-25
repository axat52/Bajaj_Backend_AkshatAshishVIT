const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Function to find the highest lowercase alphabet in an array
const findHighestLowercase = (array) => {
  const lowerCaseAlphabets = array.filter(
    (item) => typeof item === "string" && /^[a-z]$/.test(item)
  );
  if (lowerCaseAlphabets.length === 0) return null;
  return lowerCaseAlphabets.sort().reverse()[0];
};

// POST method endpoint
app.post("/api", (req, res) => {
  const array = req.body.data;

  if (!Array.isArray(array)) {
    return res
      .status(400)
      .json({ status: "Failed", message: "Invalid input: array is required" });
  }

  const numbers = array.filter((item) => typeof item === "number");
  const alphabets = array.filter(
    (item) => typeof item === "string" && /^[a-zA-Z]$/.test(item)
  );
  const highestLowercase = findHighestLowercase(array);

  const response = {
    is_success: true,
    user_id: "Akshat_Ashish27042003",
    email: "akshat.ashish2021@vitstudent.ac.in",
    roll_number: "21BEC2145",
    numbers,
    alphabets,
    highestLowercase,
  };

  res.json(response);
});

// GET method endpoint
app.get("/api/operation", (req, res) => {
  const operationCode = 12345; // You can set this to any code you prefer
  res.json({ operation_code: operationCode });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
