#!/bin/bash

# Test script to check if crawlers see the right content
echo "🧪 Testing SEO with different User-Agents"
echo "=========================================="

URL="https://wolkenbunker.com"

# Test Googlebot
echo ""
echo "🤖 Testing Googlebot:"
curl -s -H "User-Agent: Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" "$URL" | grep -i "<h1" | head -1

# Test regular browser
echo ""
echo "👤 Testing Regular Browser:"
curl -s -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" "$URL" | grep -i "<h1" | head -1

# Test meta description
echo ""
echo "📝 Meta Description (Googlebot):"
curl -s -H "User-Agent: Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" "$URL" | grep -i 'meta name="description"'

# Test title
echo ""
echo "📰 Title Tag (Googlebot):"
curl -s -H "User-Agent: Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" "$URL" | grep -i "<title"

echo ""
echo "✅ Test completed!"