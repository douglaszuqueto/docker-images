
docker-build:
	docker build -t douglaszuqueto/alpine-upx .

docker-push:
	docker push douglaszuqueto/alpine-upx

docker: docker-build docker-push

.PHONY: docker-build docker-push docker