function mix(color1, color2) {
  switch (color1) {
    case "red":
      switch (color2) {
        case "blue":
          console.log("purple");
          break;

        case "yellow":
          console.log("orange");
          break;

        default:
          console.log("invalid color conmbination");
      }
  }

  switch (color1) {
    case "blue":
      switch (color2) {
        case "red":
          console.log("purple");
          break;

        case "yellow":
          console.log("green");
          break;

        default:
          console.log("inavlid combination");
      }
  }

  switch (color1) {
    case "yellow":
      switch (color2) {
        case "red":
          console.log("orange");
          break;

        case "blue":
          console.log("green");
          break;

        default:
          console.log("invalid combination");
      }
  }
}

let color1 = "red";
let color2 = "yellow";
mix(color1,color2)
