// File: service/api.js
export function getUser(id) {
    return fetch(`/api/users/${id}`);
}
export function getPosts(userId) {
    return fetch(`/api/posts?owner=${userId}`);
}
export function getIndividualPosts(userId) {
    return fetch(`/api/posts/owner/${userId}/postId/${postId}`);
}
export function getProfile(userId) {
    return fetch(`/api/profile/${id}`);
}
export function getComments() {
    return fetch(`/api/comments/postId/${postId}`)
}