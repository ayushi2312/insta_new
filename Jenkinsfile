pipeline {
    agent any

    stages {

        stage('Clone Repo') {
            steps {
                git branch: 'main',
                credentialsId: 'github-creds',
                url: 'https://github.com/ayushi2312/insta_new.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh '''
                docker build -t ayushi2312/auth:${BUILD_NUMBER} ./Backend/auth-service
                docker build -t ayushi2312/media:${BUILD_NUMBER} ./Backend/media-service
                docker build -t ayushi2312/post:${BUILD_NUMBER} ./Backend/post-service
                docker build -t ayushi2312/user:${BUILD_NUMBER} ./Backend/user-service
                docker build -t ayushi2312/front:${BUILD_NUMBER} ./Frontend
                '''
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([string(credentialsId: 'docker-password', variable: 'PASS')]) {
                    sh 'echo $PASS | docker login -u ayushi2312 --password-stdin'
                }
            }
        }

        stage('Push Images') {
            steps {
                sh '''
                docker push ayushi2312/auth:${BUILD_NUMBER}
                docker push ayushi2312/media:${BUILD_NUMBER}
                docker push ayushi2312/post:${BUILD_NUMBER}
                docker push ayushi2312/user:${BUILD_NUMBER}
                docker push ayushi2312/front:${BUILD_NUMBER}
                '''
            }  
        }
        stage('Create Namespaces') {
            steps {
                sh '''
                kubectl apply -f Backend/auth-service/k8s/namespace.yml
                kubectl apply -f Backend/media-service/k8s/namespace.yml
                kubectl apply -f Backend/post-service/k8s/namespace.yml
                kubectl apply -f Backend/user-service/k8s/namespace.yml
                kubectl apply -f Frontend/k8s/namespace.yml
                '''
            }
        }

        stage('Deploy Services') {
            steps {
                sh '''
                kubectl apply -f Backend/auth-service/k8s/
                kubectl apply -f Backend/media-service/k8s/
                kubectl apply -f Backend/post-service/k8s/
                kubectl apply -f Backend/user-service/k8s/
                kubectl apply -f Frontend/k8s/
                '''
            }
        }

        stage('Update Images') {
            steps {
                sh '''
                kubectl set image deployment/auth-deployment auth=ayushi2312/auth:${BUILD_NUMBER} -n auth-namespace
                kubectl set image deployment/media-deployment media=ayushi2312/media:${BUILD_NUMBER} -n media-namespace
                kubectl set image deployment/post-deployment post=ayushi2312/post:${BUILD_NUMBER} -n post-namespace
                kubectl set image deployment/user-deployment user=ayushi2312/user:${BUILD_NUMBER} -n user-namespace
                kubectl set image deployment/front-deployment front=ayushi2312/front:${BUILD_NUMBER} -n front-namespace
                '''
            }
        }
        stage('Verify Deployment') {
            steps {
                sh 'kubectl get pods -A'
            }
        }
    }
}
