pipeline {
    agent any

    stages {
        stage('Docker Test') {
            steps {
                bat 'docker run --rm node:24.21.0-alpine3.24 node --version'
            }
        }
    }
}