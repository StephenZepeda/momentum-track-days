#!/bin/bash

# Generate HTTPS certificates for local development
# This script creates self-signed certificates for localhost

echo "Generating HTTPS certificates for local development..."

# Create a certs directory
mkdir -p certs

# Generate private key
openssl genrsa -out certs/localhost.key 2048

# Generate certificate
openssl req -new -x509 -key certs/localhost.key -out certs/localhost.crt -days 365 \
  -subj "/C=US/ST=California/L=Local/O=Local/CN=localhost"

echo "✓ Certificates generated successfully!"
echo "  Private key: certs/localhost.key"
echo "  Certificate: certs/localhost.crt"
echo ""
echo "To use HTTPS, run:"
echo "  HTTPS=true SSL_CRT_FILE=certs/localhost.crt SSL_KEY_FILE=certs/localhost.key npm start"
echo ""
echo "Or use the start script:"
echo "  ./start-https.sh"
