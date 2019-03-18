export default {
  /**
   * 日期时间格式化
   * @param  {[Date]} date [日期对象]
   * @param  {[String]} fmt  [格式]
   * @return {[String]}      [返回格式化字符串]
   * y: 年
   * M: 月
   * d: 日
   * H: 时
   * m: 分
   * s: 秒
   * S: 毫秒
   * TZD：时区。值可以为Z，或者+hh:mm或者-hh:mm。其中Z表示UTC时间，+hh:mm表示相对UTC加的时区时间，-hh:mm表示相对UTC减的时区时间。
   */
  formatDate(date, fmt){
    if (!date) {
      return date;
    }
    if (!fmt) {
      fmt = 'yyyy-MM-dd hh:mm:ss';
    }
    if (!(date instanceof Date)) {
      if (date.indexOf('+') !== -1) {
        date = date.replace(/\+\d+$/, '');
      }
      date = new Date(date);
    }
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    };
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + '';
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : (('00' + o[k]).substr(('' + o[k]).length)));
      }
    }
    return fmt;
  }
}
