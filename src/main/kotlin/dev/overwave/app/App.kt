package dev.overwave.app

import dev.overwave.model.Page
import dev.overwave.model.Post
import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.engine.js.*
import io.ktor.client.plugins.*
import io.ktor.client.plugins.contentnegotiation.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import kotlinx.serialization.json.Json
import react.*
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h1
import react.dom.html.ReactHTML.h3
import react.dom.html.ReactHTML.p

private val mainScope = MainScope()
private val client = HttpClient(Js) {
    install(ContentNegotiation) {
        json(Json {
            ignoreUnknownKeys = true
        })
    }
    defaultRequest {
        contentType(ContentType.Application.Json)
        url("http://localhost:8090/")
//        url {
//            protocol = URLProtocol.HTTPS
//            host = "ktor.io"
//        }
//        header("X-Custom-Header", "Hello")
    }
}

val App = FC<Props> {
    var posts: List<Post> by useState(emptyList())


    useEffectOnce {
        mainScope.launch {
            val response: HttpResponse = client.get("/posts/")
            val page: Page<Post> = response.body()
            posts = page.content
        }
    }

    h1 {
        +"Hello, React+Kotlin/JS!"
    }
    div {
        h3 {
            +"Videos to watch"
        }
        for (post in posts) {
            p {
                key = post.id.toString()
                +post.toString()
//            onClick = {
//                props.onSelectVideo(video)
//            }
//            if (video == props.selectedVideo) {
//                +"▶ "
//            }
//            +"${video.speaker}: ${video.title}"
            }
        }
//        VideoList {
//            videos = unwatchedVideos
//            selectedVideo = currentVideo
//            onSelectVideo = { video ->
//                currentVideo = video
//            }
//        }
//
//        h3 {
//            +"Videos watched"
//        }
//        VideoList {
//            videos = watchedVideos
//            selectedVideo = currentVideo
//            onSelectVideo = { video ->
//                currentVideo = video
//            }
//        }
    }
//    currentVideo?.let { curr ->
//        VideoPlayer {
//            video = curr
//            unwatchedVideo = curr in unwatchedVideos
//            onWatchedButtonPressed = {
//                if (video in unwatchedVideos) {
//                    unwatchedVideos = unwatchedVideos - video
//                    watchedVideos = watchedVideos + video
//                } else {
//                    watchedVideos = watchedVideos - video
//                    unwatchedVideos = unwatchedVideos + video
//                }
//            }
//        }
//    }
}