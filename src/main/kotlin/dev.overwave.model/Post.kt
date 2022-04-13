package dev.overwave.model

import kotlinx.serialization.Serializable

@Serializable
data class Post(
    val id: Int,
    val messageId: Long,
    val text: String,
    val file: File?,
    val type: PostType,
    val hidden: Boolean
)