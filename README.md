# Getting Started

```shell
# docker up
$ docker-compose up -d
```

## backend

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
  ./spec/openapi.yaml
```

## frontend

```shell
# generate generated.d.ts
$ npx openapi-typescript spec/openapi.yaml --output front/generated.d.ts

> Need to install the following packages:
  openapi-typescript@6.5.3
Ok to proceed? (y) y
```

```shell
# set up mock server
$ docker run --init --rm -v $(pwd)/spec/openapi.yaml:/openapi.yaml -p 4010:4010 stoplight/prism:4 mock -h 0.0.0.0 /openapi.yaml
```