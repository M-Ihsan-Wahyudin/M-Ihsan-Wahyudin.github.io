import addiction from "./question-types/addition.js";
import decimals from "./question-types/decimals.js";
import division from "./question-types/division.js";
import fractions from "./question-types/fractions.js";
import multiplication from "./question-types/multiplication.js";
import ratios from "./question-types/ratios.js";
import subtraction from "./question-types/subtraction.js";

function generateQuestion(level, type) {
  switch (type) {
    case 'addiction':
      return addiction(level)
    case 'subtraction':
      return subtraction(level)
    case 'division':
      return division(level)
    case 'multiplication':
      return multiplication(level)
    case 'fractions':
      return fractions(level)
    case 'decimals':
      return decimals(level)
    case 'ratios':
      return ratios(level)
  }
}



export default generateQuestion