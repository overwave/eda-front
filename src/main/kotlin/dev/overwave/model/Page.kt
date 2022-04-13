package dev.overwave.model

import kotlinx.serialization.Serializable

@Serializable
data class Page<T>(
    val content: List<T>,
    val number: Int,
    val numberOfElements: Int,
    val size: Int,
    val totalElements: Int,
    val totalPages: Int,
//val     pageable: {sort: {empty: true, sorted: false, unsorted: true}, offset: 0, pageNumber: 0, pageSize: 10,…}
)
