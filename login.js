function authenticate() {
  // Get the username and password from the form
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check if username and password are correct
  if (username !== 'tanya' || password !== '26/02/2023') {
    // Authentication failed, display error message
    document.getElementById('error').textContent = 'You are not Tanya, What are you doing here ???!!?!?';
    return false;
  }

  // Authentication successful, redirect to dashboard
  window.location.href = '/first.html';

  // Prevent the form from submitting normally
  return false;
}
