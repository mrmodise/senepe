node {
  // hold short version of commit sha for this checkout
  def shortSha = ''
  def PATH = '/Applications/Docker.app/Contents/Resources/bin/docker'

  /**
   * checks out master branch from Github
   */
  stage('Checkout') {
    def scm = git branch: 'master', url: 'git@github.com:mrmodise/senepe.git'
    shortSha = scm.GIT_COMMIT.take(8)
  }

  /*
   * builds the site using the prod target and environment
   * the minified site will be in the dist folder
   */
  stage('Build Artificats') {

    parallel(
      "Front-End": {
        nodejs('nodejs') { // adds the node environment to PATH
          sh 'npm install'
          sh 'npm run build'
        }
      },
      "Back-End": {
        withMaven(maven: 'maven',
          mavenLocalRepo: '.repository') {
          sh 'cd backend && mvn package'
        }
      }
    )
  }

  stage('Build and Push Docker Image') {
    parallel(
      "Front-End Image": {
        sh "${PATH} build -t backend:latest ."
        sh "${PATH} tag backend:latest mrmodise/backend:latest"
        withCredentials([usernamePassword(credentialsId: '71fb80cb-cb5f-4313-82d2-17e18f4aa3a7', passwordVariable: 'PASSWORD', usernameVariable: 'USERNAME')]) {
          sh "${PATH} login --username=mrmodise --password-stdin ${PASSWD} && ${PATH} push mrmodise/backend:latest"
        }
      },
      "Back-End Image": {
        sh "cd backend && ${PATH} build -t backend:latest ."
        sh "${PATH} tag backend:latest mrmodise/backend:latest"
        withCredentials([usernamePassword(credentialsId: '71fb80cb-cb5f-4313-82d2-17e18f4aa3a7', passwordVariable: 'PASSWORD', usernameVariable: 'USERNAME')]) {
          sh "${PATH} login --username=mrmodise --password-stdin && ${PATH} push mrmodise/backend:latest"
        }
      }
    )
  }

  /**
   // updates deployment with latest dev Docker image
   stage('deploy to dev') {withCredentials([file(credentialsId: 'kubeconfig', variable: 'KUBECONFIG')]) {sh "kubectl set image deploy mydiary-site-deploy mydiary-site=clf112358/mydiary-angular:dev-${shortSha} --record=true"}}*/
}
