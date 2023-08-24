package main

import (
	petstore "github.com/WebEngrChild/go-openAPI/api/v1"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"net/http"
)

// Greeting は返信メッセージを表す構造体です
type Greeting struct {
	Message string `json:"message"`
}

// ServerImpl は generated.go で定義されたインターフェイスを実装する構造体です
type ServerImpl struct{}

// GetHello GetGreeting は /hello エンドポイントのハンドラー関数です
func (s *ServerImpl) GetHello(ctx echo.Context) error {
	return ctx.JSON(http.StatusOK, Greeting{Message: "Hello, World!"})
}

func main() {
	e := echo.New()

	// ミドルウェアを追加
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	// サーバーの実装インスタンスを作成
	server := &ServerImpl{}

	// generated.go で定義された RegisterHandlers 関数を使用してルートをセットアップ
	petstore.RegisterHandlers(e, server)

	_ = e.Start(":8080")
}
