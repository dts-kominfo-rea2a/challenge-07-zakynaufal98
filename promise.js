const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    let inputFunc = (await promiseTheaterIXX()).concat(
      await promiseTheaterVGC()
    );
    return inputFunc.filter((item) => item.hasil === emosi).length;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  promiseOutput,
};
