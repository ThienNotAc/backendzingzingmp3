// File: /api/index.js

export default function handler(req, res) {
  const frontendURL = "https://your-frontend-project-name.vercel.app"; // ⬅️ Replace with your actual frontend URL

  const redirectMessage = `Redirecting you to ${frontendURL}\n`;
  const jsonMessage = JSON.stringify({
    success: true,
    message: "Server is running"
  });

  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(redirectMessage + jsonMessage);
}
