
#!/bin/bash
aws ecr create-repository --repository-name io.pavedroad.stagging/eo-portal --region us-west-1 > ../docs/staggging-repo-eo-portal.json
