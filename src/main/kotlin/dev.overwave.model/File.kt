package dev.overwave.model

import kotlinx.serialization.Serializable

@Serializable
data class File(
    val id: Int,
    val path: String,
    val size: Int,
)