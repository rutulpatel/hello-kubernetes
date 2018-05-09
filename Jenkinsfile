pipeline {
    agent {
        docker { image 'node:9.11.1'}
    }
    stages {

        stage('Get version'){
            steps {
                sh 'node --version'
            }
        }

        stage('Clean up') {
            steps {
                echo 'this is a cleanup step'
            }
        }
    }
}