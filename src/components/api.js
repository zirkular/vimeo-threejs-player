/* global fetch */

/** A static class that interfaces with the server-side Vimeo API */
export default class API {
  /**
   * A method for requesting Vimeo videos by video id
   * @param {number} videoId - The Vimeo video id you would like to query (e.g 296928206)
   * @returns {Promise}
   */
  static getVideo (videoId) {
    return new Promise((resolve, reject) => {
      fetch(`/videos/${videoId}`).then(res => {
        API.sendResponse(res, resolve, reject)
      })
    })
  }

  // static getVideoConfig (videoId) {
  //   return new Promise((resolve, reject) => {
  //     fetch(API.configPath(`/video/${videoId}/config`)).then(res => {
  //       API.sendResponse(res, resolve, reject)
  //     })
  //   })
  // }

  /**
   * A method for requesting Vimeo albums by album id
   * @param {number} albumId - The Vimeo album id you would like to query (e.g 5528679)
   * @returns {Promise}
   */
  static getAlbumVideos (albumId) {
    return new Promise((resolve, reject) => {
      fetch(`/albums/${albumId}/videos`).then(res => {
        API.sendResponse(res, resolve, reject)
      })
    })
  }

  /**
   * A utility method for unpacking and resolving the Vimeo API response from the server
   * @param {Object} res - Vimeo API response
   * @param {function(any)} resolve - Promise resolve method
   * @param {function(any)} reject - Promise reject method
   */
  static sendResponse (res, resolve, reject) {
    res.json().then(json => {
      if (res.status === 200) {
        resolve(json)
      } else {
        reject(json)
      }
    })
  }
}
