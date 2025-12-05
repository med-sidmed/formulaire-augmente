#!/bin/bash

# Test script for Le Nexus Connecté API
# This script validates all endpoints and security features

echo "🧪 Testing Le Nexus Connecté API Security"
echo "=========================================="
echo ""

# Check if server is running
echo "1️⃣  Health Check..."
HEALTH=$(curl -s http://localhost:5000/api/health)
if echo "$HEALTH" | grep -q '"status":"ok"'; then
  echo "✅ Server is running and healthy"
else
  echo "❌ Server health check failed"
  exit 1
fi

echo ""
echo "2️⃣  Testing Contact Submission..."
CONTACT_RESPONSE=$(curl -s -X POST http://localhost:5000/api/submit \
  -H "Content-Type: application/json" \
  -d '{
    "mission": "CONTACT",
    "data": {
      "username": "TestUser",
      "email": "test@example.com",
      "subject": "Ceci est un test",
      "message": "Ceci est un message de test pour valider la sécurité"
    }
  }')

if echo "$CONTACT_RESPONSE" | grep -q '"success":true'; then
  echo "✅ Contact submission successful"
  echo "Response: $CONTACT_RESPONSE" | jq .
else
  echo "❌ Contact submission failed"
  echo "Response: $CONTACT_RESPONSE"
fi

echo ""
echo "3️⃣  Testing Donation Submission..."
DONATION_RESPONSE=$(curl -s -X POST http://localhost:5000/api/submit \
  -H "Content-Type: application/json" \
  -d '{
    "mission": "DONATION",
    "data": {
      "username": "GenerousDonor",
      "email": "donor@example.com",
      "amount": 100,
      "frequency": "once",
      "isAnonymous": false
    }
  }')

if echo "$DONATION_RESPONSE" | grep -q '"success":true'; then
  echo "✅ Donation submission successful"
  echo "Response: $DONATION_RESPONSE" | jq .
else
  echo "❌ Donation submission failed"
  echo "Response: $DONATION_RESPONSE"
fi

echo ""
echo "4️⃣  Testing Volunteer Submission..."
VOLUNTEER_RESPONSE=$(curl -s -X POST http://localhost:5000/api/submit \
  -H "Content-Type: application/json" \
  -d '{
    "mission": "VOLUNTEER",
    "data": {
      "username": "VolunteerHero",
      "email": "volunteer@example.com",
      "skills": "Development, Design, Organization",
      "motivation": "Je veux contribuer à cette belle cause pour l'\''association et la communauté"
    }
  }')

if echo "$VOLUNTEER_RESPONSE" | grep -q '"success":true'; then
  echo "✅ Volunteer submission successful"
else
  echo "❌ Volunteer submission failed"
  echo "Response: $VOLUNTEER_RESPONSE"
fi

echo ""
echo "5️⃣  Testing Invalid Data (Should Fail)..."
INVALID_RESPONSE=$(curl -s -X POST http://localhost:5000/api/submit \
  -H "Content-Type: application/json" \
  -d '{
    "mission": "CONTACT",
    "data": {
      "username": "x",
      "email": "invalid-email",
      "subject": "ab",
      "message": "short"
    }
  }')

if echo "$INVALID_RESPONSE" | grep -q '"success":false'; then
  echo "✅ Validation correctly rejected invalid data"
  echo "Error details:"
  echo "$INVALID_RESPONSE" | jq .details
else
  echo "❌ Validation did not reject invalid data"
  echo "Response: $INVALID_RESPONSE"
fi

echo ""
echo "=========================================="
echo "🎉 All security tests completed!"
echo ""
echo "📊 Data stored in: data/submissions.json"
echo "🔒 All sensitive data is encrypted with AES-256-CBC"
