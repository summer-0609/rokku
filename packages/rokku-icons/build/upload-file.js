const qiniu = require('qiniu');

const accessKey = 'HI0qreiv9k6QWZGc4HTKdiTh1-YiEw7CQTi7nh7A';
const secretKey = 'Y4F_b-6I__OIjOQU7jg0WeqDOx4YWEqHUgxfoYW2';
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

const options = {
    scope: 'static950609',
};
const putPolicy = new qiniu.rs.PutPolicy(options);
const uploadToken = putPolicy.uploadToken(mac);

//构造上传函数
function uploadFile(key, localFile) {
    const extra = new qiniu.form_up.PutExtra();
    const config = new qiniu.conf.Config()
    const formUploader = new qiniu.form_up.FormUploader(config);

    formUploader.putFile(uploadToken, key, localFile, extra, function (err, ret) {
        if (!err) {
            // 上传成功， 处理返回值
            console.log(ret.hash, ret.key);
        } else {
            // 上传失败， 处理返回代码
            console.log(err);
        }
    });
}

module.exports = uploadFile;