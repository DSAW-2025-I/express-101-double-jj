async function getUserInfo(id) {
    try {
      const response = await fetch(`/user-info/${id}`);
      if (!response.ok) throw new Error('Usuario no encontrado');
      const data = await response.json();
      document.getElementById('output').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
      document.getElementById('output').innerText = error.message;
    }
  }
  