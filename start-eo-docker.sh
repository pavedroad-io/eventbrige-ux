startall()
{
	echo "START ALL FOR $1"
	cd ./$1
	docker-compose -f manifests/docker-compose.yaml up -d
	cd ..
}

createdb()
{
	echo "Making databases for $1"
	cd $1/dev/db
	$1ExecuteAll.sh
	cd ../../../
}

startapp()
{
	echo "START APP FOR $1"
	cd $1
	cn="pavedroad-io/$1"
	echo "status:  $cn"
	isrunning=`docker ps | grep "$cn" | awk '{print $2}'`
	if [[ "$isrunning" == "$cn" ]]
  	then
		echo "$cn already running"
	else
		echo "starting $cn"
		docker-compose -f manifests/docker-app.yaml up -d
	fi

	cd ..
}


if [ !-z ${AUTH0_SECRET} ]
then
	echo "AUTH0_SECRET must be set"
	exit 1
fi

# start org with kafka, zookeeper, and cockroachdb support
startall organization

# start just the microservice for the rest
for f in organization customers plogs emailvalidator porttracker eo-manifest-mgr workflow
do
	startapp $f
done

# make sure the databases exists
for f in organization customers plogs emailvalidator porttracker workflow
do 
  createdb $f
done

