pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'docker run --rm -v "%CD%:/app" -w /app node:24.21.0-alpine3.24 npm install'
            }
        }
    }
}