# To generate the gRPC-Web service stub
protoc -I=. Subber.proto \
--js_out=import_style=commonjs:. \
--grpc-web_out=import_style=commonjs,mode=grpcwebtext:.