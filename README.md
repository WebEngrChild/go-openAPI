# Getting Started

```shell
# install oapi-codegen at host machine
go install github.com/deepmap/oapi-codegen/cmd/oapi-codegen@latest
```

```shell
# generate generated.go
docker-compose exec go-echo-sample \
  oapi-codegen \
  -package petstore \
  -generate echo-server \
  -o /app/api/v1/generated.go \
  /app/spec/swagger.yaml
```