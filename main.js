const fonts = [
    {
        family: "Georgia, serif"
    },
    {
        family: `"Palatino Linotype", "Book Antiqua", Palatino, serif`
    },
    {
        family: `"Times New Roman", Times, serif`
    },
    {
        family: `Arial, Helvetica, sans-serif`
    },
    {
        family: `"Arial Black", Gadget, sans-serif`
    },
    {
        family: `"Comic Sans MS", cursive, sans-serif`
    },
    {
        family: "Impact, Charcoal, sans-serif"
    },
    {
        family: `"Lucida Sans Unicode", "Lucida Grande", sans-serif`
    },
    {
        family: `Tahoma, Geneva, sans-serif`
    },
    {
        family: `"Trebuchet MS", Helvetica, sans-serif`,
    },
    {
        family: `Verdana, Geneva, sans-serif`
    },
    {
        family: `"Courier New", Courier, monospace`
    },
    {
        family: `"Lucida Console", Monaco, monospace`
    }
];

const transforms = [ //text-transform
    "none",
    "capitalize",
    "uppercase",
    "lowercase"
];

const styles = [ //font-style
    "normal",
    "italic"
];

const weights = [ //font-weight
    // "normal",
    // "bold",
    // "bolder",
    // "lighter",
    100,
    200,
    300,
    400,
    500,
    600,
    600,
    700,
    800,
    900
];

const app = new Vue({
    el: '#app',
    template: document.getElementById("theTemplate"),
    data: {
      phrase: "the quick brown fox jumps over the lazy dog",
      fonts: fonts,
      transforms: transforms,
      styles: styles,
      weights: weights
    }
});