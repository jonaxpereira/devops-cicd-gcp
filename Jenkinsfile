pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
                script {
                    sh """#!/bin/bash
                        echo "Testing app"
                    """
                }
            }
        }
        stage('build') {
            steps {
                script {
                    sh """#!/bin/bash
                        echo "preparing workspace"
                        gcloud auth activate-service-account --key-file /tmp/gcp-key.json
                        gcloud builds submit --project jonaxpereira-381915 --config ./app/cloudbuild.yaml .
                    """
                }
            }
        }
    }
}