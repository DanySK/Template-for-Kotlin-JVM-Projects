const publishCmd = `
./gradlew uploadKotlin release || exit 1
./gradlew publishKotlinOSSRHPublicationToGithubRepository || true
`
import config from 'semantic-release-preconfigured-conventional-commits' assert { type: "json" };
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
export default config
