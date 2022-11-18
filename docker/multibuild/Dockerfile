# 1. Build Image
From golang:1.13 AS builder

# Install dependencies
WORKDIR /go/src/github.com/asashiho/dockertext-greet
RUN go get -d -v github.com/urfave/cli

# Build Modules
COPY main.go .
RUN GOOS=linux go build -a -o greet .

##----------------------------------
# 2. Production Image
FROM busybox
WORkdir /opt/greet/bin

#Deploy modules
COPY --from=builder /go/src/github.com/asashiho/dockertext-greet/ .
ENTRYPOINT ["./greet"]
