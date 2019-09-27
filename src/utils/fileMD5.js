/**
 * 生成文件MD5，返回异步对象
 */
import SparkMD5 from 'spark-md5';

export class MD5Service {
  /**
   * 单个文件MD5生成方法
   * @param {*} file : 文件对象
   */
  static fileMD5(file) {
    const iterator = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = function (e) {
        if (file.size !== e.target.result.byteLength) {
          reject(null);
        } else {
          const md5 = SparkMD5.ArrayBuffer.hash(e.target.result);
          console.log(md5);
          resolve(md5);
        }
      };
      fileReader.onerror = function () {
        reject(null);
      };
      fileReader.readAsArrayBuffer(file);
    });
    return iterator;
  }
  /**
   * 文件分割后，某一个块的MD5生成方法
   * @param {*} index : 文件分块的索引
   * @param {*} chunkSize : 文件单个分块的大小，默认大小为5M
   * @param {*} file : 当前文件对象
   */
  static chunkMD5(index, chunkSize = 5242880, file) {
    const iterator = new Promise((resolve, reject) => {
      const blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;
      const fileSize = file.size;
      const fileReader = new FileReader();
      let currentChunk = index;
      const chunkStart = currentChunk * chunkSize;
      let chunkEnd = chunkStart + chunkSize;
      if (chunkEnd > fileSize) {
        chunkEnd = fileSize;
      }
      console.log(currentChunk);
      const chunk = blobSlice.call(file, chunkStart, chunkEnd);
      fileReader.readAsArrayBuffer(chunk);
      fileReader.onload = function (e) {
        if (chunk.size !== e.target.result.byteLength) {
          reject(null);
        } else {
          const md5 = SparkMD5.ArrayBuffer.hash(e.target.result);
          resolve(md5);
        }
      };
      fileReader.onerror = function () {
        reject(null);
      };
    });
    return iterator;
  }
}
