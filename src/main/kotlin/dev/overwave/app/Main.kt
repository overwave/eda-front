package dev.overwave.app

import kotlinx.browser.document
import react.create
import react.dom.render

fun main() {
    val container = document.getElementById("root") ?: error("An error occurred. Couldn't find the root container")
    render(App.create(), container)
}