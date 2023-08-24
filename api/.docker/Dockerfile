FROM golang:1.21

WORKDIR /app

# モジュールのサポートを有効にする
ENV GO111MODULE=on

# go.modとgo.sumをコピーして依存関係をダウンロード
COPY ./api/go.mod ./api/go.sum ./
RUN go mod download

# ソースコードとその他のファイルをコピー
COPY ./api .

# アプリケーションをビルド（この部分はプロジェクトの構造やビルド手順に応じて変更する必要があります）
RUN go build -o main

# ビルドしたアプリケーションを実行
CMD ["./main"]
