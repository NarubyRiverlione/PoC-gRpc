# To generate the protobuf message classes
protoc -I=. Subber.proto \
--js_out=import_style=commonjs:. 