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
                sh 'docker ps'
                echo env.BUILD_NUMBER
                echo env.BUILD_URL
                sh 'echo $GIT_COMMIT'
            }
        }

        stage('Clean up') {
            steps {
                echo 'Cleaning up working dir'
                deleteDir()
            }
        }
    }
}