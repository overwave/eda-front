package dev.overwave.model

//import dev.overwave.util.EnumSerializer
//import dev.overwave.util.postTypeSerializer
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

//@Serializable
enum class PostType {
//    @Serializable
    TEXT,
    PHOTO,
    VIDEO,
    ANIMATION,
}