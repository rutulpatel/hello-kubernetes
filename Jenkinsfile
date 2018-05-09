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
                def image_name = "rutul/hello-kubernetes"
                sh 'docker build -t ${image_name}:$MAJOR_VERSION.$BUILD_NUMBER -t ${image_name}:latest .'
            }
        }


        stage('Publish'){
            agent {
                label "docker"
            }
            steps {
                def image_name = "rutul/hello-kubernetes"                
                withDockerRegistry([ credentialsId: "docker-hub-credentials", url: ""]) {
                    sh 'docker push ${image_name}:latest'
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