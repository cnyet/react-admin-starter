/**
 * 文件分次上传，断点续传
 */
import axios from 'axios';
export class ResumeUpload {
  /**
   * 文件上传之前
   * @param file : 已选择的文件
   */
  static beforeUpload(url, md5, file) {
    const fileName = file.name;
    const fileSize = file.size;
    const result = axios.post(url, {
      body: {
        md5: md5,
        fileName: fileName,
        fileSize: fileSize
      }
    }).then(res => {
      const data = res.data;
      console.log('开始块序号：', data.partNo);
      return {
        fileStatus: data.file_status,
        uploadId: data.upload_id,
        chunkIndex: data.partNo,
        chunkSize: data.partSize,
        chunkLength: data.totalPartNum
      };
    }).catch(err => {
      return err;
    });
    return result;
  }
  /**
   * 大文件切块分次上传
   * @param index : 当前块序号
   * @param chunkSize : 每块文件大小
   * @param totalChunk : 需要分块总数
   */
  static uploadHandle(file, info, context) {
    const uploadId = info.uploadId;
    const index = info.chunkIndex;
    const chunkSize = info.chunkSize;
    const totalChunk = info.chunkLength;
    const uploadResult = async () => {
      const blob = file;
      let sliceStart = 0;
      let sliceEnd = 0;
      let chunkIndex = index + 1;
      const fileSize = blob.size;
      const fileName = blob.name;
      while (chunkIndex <= totalChunk) {
        let formData = new FormData();
        sliceEnd = sliceStart + chunkSize;
        if (sliceEnd > fileSize) {
          sliceEnd = fileSize;
        }
        console.log('正在上传块序号：', chunkIndex);
        const percent = parseInt((chunkIndex / totalChunk * 100).toFixed(2));
        context.$store.dispatch('commitPercent', percent);
        const chunk = blob.slice(sliceStart, sliceEnd); // 切割文件
        formData.append('file', chunk, fileName);
        formData.append('upload_id', uploadId);
        formData.append('partNo', chunkIndex);
        const callback = await this.uploadChunk(chunkIndex, formData);
        if (callback) {
          sliceStart = sliceEnd;
          chunkIndex++;
        } else {
          return false;
        }
      }
      return 'ok';
    };
    return uploadResult();
  }
  /**
   * 文件全部上传完成
   */
  static afterUpload(url, uploadId) {
    const result = axios.post(url, {
      body: {
        upload_id: uploadId
      }
    }).then(res => {
      return res.data;
    }).catch(err => {
      return err;
    });
    return result;
  }
  /**
   * 上传文件的单个小块
   * @param num : 当前小块的序号
   * @param formData : 要上传的文件小块
   */
  static uploadChunk(url, num, formData) {
    // const userAuth = store.state.userAuth;
    const result = new Promise((resolve, reject) => {
      axios({
        method: 'post',
        headers: {
          Authorization: 'author',
        },
        url: url,
        data: formData
      }).then(function (res) {
        resolve(true);
      }).catch(function (err) {
        reject(err);
      });
    });
    return result;
  }
};
