FROM alpine:edge

RUN mkdir -p /data/db && \
    apk update && \
    apk upgrade && \
    echo http://dl-4.alpinelinux.org/alpine/edge/testing >> /etc/apk/repositories && \
    apk add --no-cache mongodb && \
    rm -rf /var/cache/apk/* && rm -rf /var/lib/apt/lists/*

VOLUME /data/db

EXPOSE 27017 27018

CMD ["mongod"]
