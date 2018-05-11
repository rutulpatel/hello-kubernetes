pipeline {
    agent none
    stages {
        stage('Get version'){
            agent {
                docker { image 'node:9.11.1'}
            }
            steps {
                sh 'node --version'
            }
        }

        stage('Build'){
            agent {
                label "docker"
            }
            steps {
                sh 'docker build -t rutul/hello-kubernetes:$MAJOR_VERSION.$BUILD_NUMBER -t rutul/hello-kubernetes:latest .'
            }
        }


        stage('Publish'){
            agent {
                label "docker"
            }
            steps {               
                sh 'docker login -u ${DOCKER_CREDS_USR} -p ${DOCKER_CREDS_PSW}'
                sh 'docker push rutul/hello-kubernetes:$MAJOR_VERSION.$MINOR_VERSION'
                sh 'docker push rutul/hello-kubernetes:latest'
            }
        }

        stage('Deploy'){
            agent {
                label "kubectl"
            }
            steps {
                sh 'kubectl apply -f deployment.yaml'
                sh 'kubectl get pods'
            }
        }

        stage('Clean up') {
            agent {
                label "docker"
            }
            steps {
                echo 'Cleaning up working dir'
                deleteDir()
                echo 'Deleting docker images other than latest'
                sh 'docker rmi `docker images rutul/hello-kubernetes | grep -v latest | awk \'FNR != 1 { print \$3 }\'` || true'
            }
        }
    }

    environment {
        MAJOR_VERSION = '1'
        MINOR_VERSION = '1'
        DOCKER_CREDS = credentials("docker-hub-credentials")
    }

}