plugins {
    id("com.gradle.enterprise") version "3.10.2"
    id("org.danilopianini.gradle-pre-commit-git-hooks") version "1.0.12"
}

gradleEnterprise {
    buildScan {
        termsOfServiceUrl = "https://gradle.com/terms-of-service"
        termsOfServiceAgree = "yes"
        publishOnFailure()
    }
}

gitHooks {
    preCommit {
        tasks("ktlintCheck")
    }
    commitMsg { conventionalCommits() }
    createHooks()
}

rootProject.name = "Template-for-Kotlin-JVM-Projects"
