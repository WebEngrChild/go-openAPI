# Getting Started

```shell
# install oapi-codegen at host machine
go install github.com/deepmap/oapi-codegen/cmd/oapi-codegen@latest
```

```shell
# generate generated.d.ts
npx openapi-typescript spec/swagger.yaml --output front/generated.d.ts
```

```shell
# generate generated.go
oapi-codegen \
  -package petstore \
  -generate echo-server \
  -o ./api/v1/generated.go \
  ./spec/swagger.yaml
```