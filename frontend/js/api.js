async function sendToBackend(endpoint, data) {
  try {
    const res = await fetch(`/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!res.ok) {
      throw new Error("Server error");
    }

    return await res.json();

  } catch (err) {
    console.error("Fetch error:", err);
    return { reply: "⚠ Failed to connect to AI server" };
  }
}