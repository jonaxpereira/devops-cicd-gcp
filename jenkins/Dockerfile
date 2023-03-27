FROM jenkins/jenkins:lts-jdk11

USER root

RUN apt-get install -y apt-transport-https ca-certificates gnupg

RUN echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] http://packages.cloud.google.com/apt cloud-sdk main" | tee -a /etc/apt/sources.list.d/google-cloud-sdk.list
RUN curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | tee /usr/share/keyrings/cloud.google.gpg
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash -


RUN apt-get update

RUN apt-get install -y python3 \
    google-cloud-sdk \
    google-cloud-sdk-gke-gcloud-auth-plugin \
    kubectl \
    nodejs \
    ca-certificates \
    curl \
    gnupg

COPY gcp-key.json ./tmp