# Getting Started

```shell
# docker up
$ docker-compose up -d
```

```shell
# install oapi-codegen at host machine
$ go install github.com/deepmap/oapi-codegen/cmd/oapi-codegen@latest

> which oapi-codegen
/Users/name/go/bin/oapi-codegen

```

```shell
# generate generated.go
$ oapi-codegen \
  -package petstore \
  -generate echo-server \
  -o ./api/v1/generated.go \
  ./spec/swagger.yaml
```

```shell
# generate generated.d.ts
$ npx openapi-typescript spec/swagger.yaml --output front/generated.d.ts

> Need to install the following packages:
  openapi-typescript@6.5.3
Ok to proceed? (y) y
```