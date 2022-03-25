plugins {
    kotlin("js") version "1.6.10"
}

group = "dev.overwave"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
    testImplementation(kotlin("test"))
    implementation("org.jetbrains.kotlin-wrappers:kotlin-react:17.0.2-pre.240-kotlin-1.5.30")
    implementation("org.jetbrains.kotlin-wrappers:kotlin-react-dom:17.0.2-pre.240-kotlin-1.5.30")
    implementation("org.jetbrains.kotlin-wrappers:kotlin-styled:5.3.1-pre.240-kotlin-1.5.30")
    implementation("org.jetbrains.kotlin-wrappers:kotlin-react-router-dom:5.2.0-pre.240-kotlin-1.5.30")
    implementation("org.jetbrains.kotlin-wrappers:kotlin-redux:4.1.0-pre.240-kotlin-1.5.30")
    implementation("org.jetbrains.kotlin-wrappers:kotlin-react-redux:7.2.4-pre.240-kotlin-1.5.30")
}

kotlin {
    js(IR) {
        binaries.executable()
        browser {
            commonWebpackConfig {
                cssSupport.enabled = true
            }
        }
    }
}