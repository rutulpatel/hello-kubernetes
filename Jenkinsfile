pipeline {
    
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
                echo '$BUILD_NUMBER'
                echo "$BUILD_URL"
                echo $GIT_COMMIT
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