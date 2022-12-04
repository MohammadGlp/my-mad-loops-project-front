//this function gets a string of numbers and seperate it by three
function addComma(str) {
  var objRegex = new RegExp("(-?[0-9]+)([0-9]{3})");
  while (objRegex.test(str)) {
    str = str.replace(objRegex, "$1,$2");
  }
  return str;
}

const rateCalculate = (item) => {
  const likeNumber = item?.like;
  const disLikeNumber = item?.dislike;
  const fractionLike =
    likeNumber > 0 ? likeNumber / (likeNumber + disLikeNumber) : 0;
  // if (fractionLike < 0.2) {
  //   return 1;
  // } else if (fractionLike >= 0.2 && fractionLike < 0.4) {
  //   return 2;
  // } else if (fractionLike >= 0.4 && fractionLike < 0.6) {
  //   return 3;
  // } else if (fractionLike >= 0.6 && fractionLike < 0.8) {
  //   return 4;
  // } else if (fractionLike >= 0.8) {
  //   return 5;
  // }
  return fractionLike;
};

const handleCategory = (category) => {
  let val = null;
  switch (category) {
    case "news":
      val = "اخبار";
      break;
    case "article":
      val = "مقالات";
      break;
    default:
      break;
  }
  return val;
};

export { addComma, rateCalculate, handleCategory };
