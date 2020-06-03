
docker-build:
	docker build -t douglaszuqueto/alpine-go .

docker-push:
	docker push douglaszuqueto/alpine-go

docker: docker-build docker-push

.PHONY: docker-build docker-push docker