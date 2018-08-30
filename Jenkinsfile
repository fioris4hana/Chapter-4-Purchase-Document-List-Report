pipeline {
    agent { 
        docker 
        {
            image 'node:8.11.3' 
        } 
    }
    stages {
        stage('build') {
            steps {
                sh 'ls -la'
                sh 'npm --version'
                sh 'node --version'              
                sh 'npm config set @sap:registry https://npm.sap.com'
                sh 'npm install'
                sh 'npm run-script build'
            }
        }
		stage('test'){
			steps {
				sh 'phantomjs -v'
				sh 'npm run-script test'
			}
		}
    }
}
