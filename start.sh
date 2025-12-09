#!/bin/bash

# Momentum Track Days - Start Script for Ubuntu/Linux
# This script starts the React development server with optional custom port

# Color codes for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Default port
PORT=${1:-3000}

# Get the server's IP address
SERVER_IP=$(hostname -I | awk '{print $1}')
if [ -z "$SERVER_IP" ]; then
    SERVER_IP="127.0.0.1"
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}Installing dependencies...${NC}"
    npm install
fi

# Display startup info
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}Momentum Track Days - Development Server${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "${GREEN}✓${NC} Port: ${BLUE}${PORT}${NC}"
echo -e "${GREEN}✓${NC} Local: ${BLUE}http://localhost:${PORT}${NC}"
echo -e "${GREEN}✓${NC} Server IP: ${BLUE}http://${SERVER_IP}:${PORT}${NC}"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Start the development server
PORT=$PORT npm start
