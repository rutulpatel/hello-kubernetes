pipeline {
    agent {
        label 'unix'
    }
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
                sh 'docker build -t rutul/hello-kubernetes:$MAJOR_VERSION.$BUILD_NUMBER -t ${image_name}:latest .'
            }
        }


        stage('Publish'){
            agent {
                label "docker"
            }
            steps {               
                withDockerRegistry([ credentialsId: "docker-hub-credentials", url: ""]) {
                    sh 'docker push rutul/hello-kubernetes:latest'
                }
            }
        }

        stage('Clean up') {
            steps {
                echo 'Cleaning up working dir'
                deleteDir()
            }
        }
    }

    environment {
        MAJOR_VERSION = '1'
    }

}