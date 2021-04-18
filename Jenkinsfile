pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
          stage('SCM') {
            git 'https://github.com/foo/bar.git'
          }
          stage('SonarQube analysis') {
            withSonarQubeEnv() { // Will pick the global server connection you have configured
              sh './gradlew sonarqube'
            }
          }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
