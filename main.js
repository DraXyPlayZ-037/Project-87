canvas = new fabric.Canvas("myCanvas");

oymecs = 1;
oxmecs = 1;
mobj = "";

function mass(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        mobj = Img;
        mobj.scaleToWidth(250);
        mobj.scaleToHeight(250);
        mobj.set({
            top: oymecs,
            left: oxmecs
        });
        canvas.add(mobj);
    });
}
window.addEventListener('keydown', my_keydown);

function my_keydown(e) {
    kp = e.keyCode;
    console.log(kp)
    Agni = "Agni";
    Juvenile = "Juvenile";
    Happy = "Happy";
    Amity = "Amity";
    Arman = "Arman";

    //Red
    if (kp == "82") {
        document.getElementById("who").innerHTML = Agni;
        console.log("Red");
        console.log(Agni);
        oxmecs = 100;
        oymecs = 200;

        mass("red.png");


    }
    //Green
    if (kp == "71") {
        document.getElementById("who").innerHTML = Juvenile;
        console.log("Green");
        console.log(Juvenile);
        oxmecs = 350;
        oymecs = 200;

        mass("green.png");
    }
    //Yellow
    if (kp == "89") {
        document.getElementById("who").innerHTML = Happy;
        console.log("Yellow");
        console.log(Happy);
        oxmecs = 600;
        oymecs = 200;

        mass("yellow.png");
    }
    //Pink
    if (kp == "80") {
        document.getElementById("who").innerHTML = Amity;
        console.log("Pink");
        console.log(Amity);
        oxmecs = 850;
        oymecs = 200;

        mass("pink.webp");
    }
    //Blue
    if (kp == "66") {
        document.getElementById("who").innerHTML = Arman;
        console.log("Blue");
        console.log(Arman);
        oxmecs = 1100;
        oymecs = 200;

        mass("blue.png");
    }
}