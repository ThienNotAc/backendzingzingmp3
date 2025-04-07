// /api/ping.js
export default function handler(req, res) {
    console.log("Redirecting you to https://your-frontend.vercel.app");
  
    // Simulate delay (optional)
    setTimeout(() => {
      res.status(200).json({ success: true, message: "Server is running" });
    }, 1000);
  }
  
