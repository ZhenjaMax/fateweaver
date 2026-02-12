const API_URL = 'http://localhost:3000/auth/google';

async function testGoogleAuth() {
  console.log(`[TEST] Checking ${API_URL}...`);
  try {
    const res = await fetch(API_URL, {
      method: 'GET',
      redirect: 'manual' // Don't automatically follow redirects so we can see the 302
    });
    
    console.log(`Status: ${res.status}`);
    
    if (res.status === 404) {
      console.error('❌ Failed: Route returned 404 Not Found');
      process.exit(1);
    } else if (res.status === 302 || res.status === 301) {
      console.log('✅ Passed: Route redirects (likely to Google)');
      console.log('Location:', res.headers.get('location'));
    } else if (res.status === 200) {
      // Possible if it renders a page instead of redirecting immediately, though unlikely for pure API
      console.log('⚠️ Warning: Route returned 200 OK (Expected Redirect, but at least it exists)');
    } else {
      console.log(`❓ Unexpected status: ${res.status}`);
    }
  } catch (error) {
    console.error('❌ Request failed:', error.message);
    process.exit(1);
  }
}

testGoogleAuth();
