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
                sh 'docker build -t rutul/hello-kubernetes:$MAJOR_VERSION.$BUILD_NUMBER .'
                echo env.BUILD_NUMBER
                echo env.MAJOR_VERSION
                echo env.GIT_COMMIT
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