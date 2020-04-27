

echo "Generating certificates ..."
# CA private key
openssl genrsa -passout pass:1111 -des3 -out ca.key 4096
# CA cert
openssl req -passin pass:1111 -new -x509 -days 365 -key ca.key -out ca.crt -subj  "/C=BE/ST=RM/L=Riverlione/O=SubDive/OU=CA/CN=CA"

# server private key
openssl genrsa -passout pass:1111 -des3 -out server.key 4096
# server cert request
openssl req -passin pass:1111 -new -key server.key -out server.csr -subj  "/C=BE/ST=RM/L=Riverlione/O=SubDive/OU=Server/CN=SubDive.local"
# server create cert at CA with csr
openssl x509 -req -passin pass:1111 -days 365 -in server.csr -CA ca.crt -CAkey ca.key -set_serial 01 -out server.crt
# server convert private key to rsa
openssl rsa -passin pass:1111 -in server.key -out server.key


# client private key
openssl genrsa -passout pass:1111 -des3 -out client.key 4096
# client cert request
openssl req -passin pass:1111 -new -key client.key -out client.csr -subj  "/C=BE/ST=RM/L=Riverlione/O=SubDive/OU=Client/CN=SubDive.local"
# client create cert at CA with csr
openssl x509 -passin pass:1111 -req -days 365 -in client.csr -CA ca.crt -CAkey ca.key -set_serial 01 -out client.crt
# client convert private key to rsa
openssl rsa -passin pass:1111 -in client.key -out client.key