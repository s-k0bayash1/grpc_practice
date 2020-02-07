FROM golang:1.13 AS builder
WORKDIR /app

COPY . .

RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o /app/server ./cmd/server

FROM alpine:latest
WORKDIR /app

COPY --from=builder /app/server /app

ENTRYPOINT ["./server"]
