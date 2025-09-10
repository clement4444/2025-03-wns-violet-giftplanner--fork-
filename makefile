.PHONY: dev clean

dev:
	docker compose up -d --build

stop:
	docker stop $$(docker ps -q)

clean:
	docker system prune -af --volumes