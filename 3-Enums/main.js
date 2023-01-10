var Colors;
(function (Colors) {
    Colors["RED"] = "red";
    Colors["GREEN"] = "green";
    Colors["YELLOW"] = "yellow";
})(Colors || (Colors = {}));
var sampleEmumObject = {
    name: "abhijeet",
    age: 35,
    color: Colors.YELLOW
};
console.log(sampleEmumObject);
