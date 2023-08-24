FROM golang:1.21

WORKDIR /app

# モジュールのサポートを有効にする
ENV GO111MODULE=on

# go.mod と go.sum を先にコピーして依存関係をダウンロード (キャッシュ利用のため)
COPY go.mod go.sum ./
RUN go mod download

# oapi-codegen をインストール
RUN go install github.com/deepmap/oapi-codegen/cmd/oapi-codegen@latest

# 残りのソースコードをコピー
COPY . .

CMD ["go", "run", "main.go"]