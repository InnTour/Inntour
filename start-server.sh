#!/bin/bash

# InnTour - Start Local Server Script

echo "🌄 InnTour Website - Starting Local Server..."
echo ""
echo "📂 Working directory: $(pwd)"
echo ""

# Check if Python is available
if command -v python3 &> /dev/null; then
    echo "✅ Python 3 found"
    echo "🚀 Starting server on http://localhost:8000"
    echo ""
    echo "   Open your browser and visit:"
    echo "   👉 http://localhost:8000"
    echo ""
    echo "   Press CTRL+C to stop the server"
    echo ""
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "✅ Python found"
    echo "🚀 Starting server on http://localhost:8000"
    echo ""
    echo "   Open your browser and visit:"
    echo "   👉 http://localhost:8000"
    echo ""
    echo "   Press CTRL+C to stop the server"
    echo ""
    python -m SimpleHTTPServer 8000
else
    echo "❌ Python not found!"
    echo ""
    echo "Please install Python or use another method:"
    echo "  - Node.js: npx http-server -p 8000"
    echo "  - PHP: php -S localhost:8000"
    echo ""
fi
