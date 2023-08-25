FROM golang:1.21

WORKDIR /app

# モジュールのサポートを有効にする
ENV GO111MODULE=on

# oapi-codegen をインストール
RUN go install github.com/deepmap/oapi-codegen/cmd/oapi-codegen@latest

# go.modとgo.sumをコピーして依存関係をダウンロード
COPY go.mod go.sum ./
RUN go mod download

# ソースコードとその他のファイルをコピー
COPY . .

# アプリケーションをビルド（この部分はプロジェクトの構造やビルド手順に応じて変更する必要があります）
RUN go build -o main

# ビルドしたアプリケーションを実行
CMD ["./main"]
