
PROJECTNAME := $(shell basename "$(PWD)")
PROJDIR := $(shell pwd)
TARGET := eo-portal

ASSETS := $(PROJDIR)/assets/images
ARTIFACTS := $(PROJDIR)/artifacts
DOCS := $(PROJDIR)/docs
LOGS := $(PROJDIR)/logs

SHELL := /bin/bash

.PHONY: check

all: build


## build: Build the binary for linux / mac x86 and amd
build:
	@echo "  >  Building ..."
	ng build --output-path=dist
 #	--configuration configuration=production

## deploy: Deploy image to repository and k8s cluster
deploy:
	@skaffold run -f manifests/skaffold.yaml

## deploy: Deploy image to repository and k8s cluster
staging-up:
	@skaffold run -p staging -f manifests/skaffold.yaml

## deploy-down: Delete and cleanup deployment from the k8s cluster
deploy-down:
	@echo "  >  Cleanup deployment..."
	@skaffold delete -f manifests/skaffold.yaml

## staging-down: Delete and cleanup deployment from the k8s cluster
staging-down:
	@echo "  >  Cleanup deployment..."
	@skaffold delete -p staging -f manifests/skaffold.yaml

## help: Print possible commands
help: Makefile
	@echo
	@echo " Choose a command run in "$(PROJECTNAME)":"
	@echo
	@sed -n 's/^##//p' $< | column -t -s ':' |  sed -e 's/^/ /'
	@echo

## docker-build: Build docker images for use with docker-compose
docker-build:
	docker build -f manifests/Dockerfile -t pavedroad-io/organization .

## up: Start service using docker-compose
up: docker-build
	docker-compose -f manifests/docker-compose.yaml up -d --remove-orphans


## down: Stop service using docker-compose
down:
	docker-compose -f manifests/docker-compose.yaml down

$(ASSETS):
	$(shell mkdir -p $(ASSETS))

$(ARTIFACTS):
	$(shell mkdir -p $(ARTIFACTS))

$(BUILDS):
	$(shell mkdir -p $(BUILDS))

$(DOCS):
	$(shell mkdir -p $(DOCS))

$(LOGS):
	$(shell mkdir -p $(LOGS))
