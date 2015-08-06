const defaultColors = {
  primary: "rebeccapurple",
  lightBase: "lightgrey",
  inverse: "white",
  base: "black"
};

function Units(baseUnit){
  return {
    one: baseUnit,
    twoThirds: baseUnit / 1.5,
    oneHalf: baseUnit / 2,
    oneThird: baseUnit / 3,
    oneSixth: baseUnit / 6,
    micro: baseUnit / 15,
    tiny: baseUnit / 30
  };
}

function Styles({colors, baseUnit = 30}){
  const { one, twoThirds, oneThird, oneSixth, tiny } = new Units(baseUnit);
  const { base, inverse, primary, lightBase } = Object.assign(defaultColors, colors);
  return {
    base: {
      display: "flex"
    },
    outer: {
      flexDirection: "column",
      justifyContent: "center",
      padding: oneSixth,
      backgroundColor: lightBase,
      height: one,
      marginBottom: oneSixth,
      color: base
    },
    inner: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      height: "100%"
    },
    checkbox: {
      display: "inline-block",
      marginRight: oneThird,
      width: twoThirds,
      height: twoThirds,
      border: `${tiny}px solid ${inverse}`
    },
    complete: {
      backgroundColor: primary
    },
    incomplete: {
      backgroundColor: inverse
    },
    highlight: {
      backgroundColor: primary
    }
  };
}
export default Styles;
