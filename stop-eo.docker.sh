stopall()
{
	echo "START ALL FOR $1"
	cd ./$1
	docker-compose -f manifests/docker-compose.yaml down --remove-orphans
	cd ..
}

stopall organization


