#!/bin/bash

# Momentum Track Days - HTTPS Start Script for Ubuntu/Linux
# This script starts the React development server with HTTPS enabled

# Color codes for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Default port
PORT=${1:-3000}

# Check if certificates exist
if [ ! -f "certs/localhost.crt" ] || [ ! -f "certs/localhost.key" ]; then
    echo -e "${RED}✗ SSL certificates not found!${NC}"
    echo ""
    echo "Generate certificates with:"
    echo -e "  ${BLUE}chmod +x generate-certs.sh${NC}"
    echo -e "  ${BLUE}./generate-certs.sh${NC}"
    exit 1
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}Installing dependencies...${NC}"
    npm install
fi

# Display startup info
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}Momentum Track Days - HTTPS Development Server${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "${GREEN}✓${NC} HTTPS: ${BLUE}Enabled${NC}"
echo -e "${GREEN}✓${NC} Port: ${BLUE}${PORT}${NC}"
echo -e "${GREEN}✓${NC} URL: ${BLUE}https://localhost:${PORT}${NC}"
echo ""
echo -e "${YELLOW}Note:${NC} Browser may show SSL warning (self-signed certificate)"
echo "      Click 'Advanced' and proceed - this is normal for local development"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Start the development server with HTTPS
HTTPS=true SSL_CRT_FILE=certs/localhost.crt SSL_KEY_FILE=certs/localhost.key PORT=$PORT npm start
