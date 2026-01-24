const API_URL = 'http://localhost:3000/auth';

async function testAuth() {
  const email = `test${Date.now()}@example.com`;
  const password = 'password123';
  const name = 'Test User';

  try {
    // 1. Register
    console.log(`\n[TEST] Registering user: ${email}...`);
    const registerRes = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, name })
    });
    
    const text = await registerRes.text();
    try {
        const registerData = JSON.parse(text);
        if (!registerRes.ok) throw { status: registerRes.status, data: registerData };
        console.log('✅ Registration successful:', registerData);
    } catch (e) {
        throw { status: registerRes.status, raw: text, parseError: e };
    }

    // 2. Login
    console.log(`\n[TEST] Logging in...`);
    const loginRes = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });
    const loginData = await loginRes.json();
    if (!loginRes.ok) throw { status: loginRes.status, data: loginData };
    
    const token = loginData.token;
    console.log('✅ Login successful. Token received.');

    // 3. Get Profile (Protected)
    console.log(`\n[TEST] Fetching profile...`);
    const meRes = await fetch(`${API_URL}/me`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const meData = await meRes.json();
    if (!meRes.ok) throw { status: meRes.status, data: meData };

    console.log('✅ Profile retrieved:', meData);

    if (meData.email === email) {
        console.log('\n🎉 ALL AUTH TESTS PASSED!');
    } else {
        console.error('\n❌ Profile email mismatch');
    }

  } catch (error) {
    console.error('\n❌ FAILED:', error);
  }
}

testAuth();
