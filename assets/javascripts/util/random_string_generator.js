export default class RandomStringGenerator {
  static generate(len) {
    let result = '';

    for(let i = 0; i < len; ++i) {
      result += (Math.floor(Math.random() * (Math.pow(36, len - 1) * 9)) + Math.pow(36, len - 1)).toString(36);
    }

    return result;
  }
}
