var publishCmd = `
./gradlew uploadKotlin release || exit 1
./gradlew publishKotlinOSSRHPublicationToGithubRepository || true
`
var config = require('semantic-release-preconfigured-conventional-commits');
config.plugins.push(
    [
        "@semantic-release/exec",
        {
            "publishCmd": publishCmd,
        }
    ],
    "@semantic-release/github",
    "@semantic-release/git",
)
module.exports = config
