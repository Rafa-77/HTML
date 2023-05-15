function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
    var data = `
    ./CYBERFICTION-IMAGES/male0001.png
    ./CYBERFICTION-IMAGES/male0002.png
    ./CYBERFICTION-IMAGES/male0003.png
    ./CYBERFICTION-IMAGES/male0004.png
    ./CYBERFICTION-IMAGES/male0005.png
    ./CYBERFICTION-IMAGES/male0006.png
    ./CYBERFICTION-IMAGES/male0007.png
    ./CYBERFICTION-IMAGES/male0008.png
    ./CYBERFICTION-IMAGES/male0009.png
    ./CYBERFICTION-IMAGES/male0010.png
    ./CYBERFICTION-IMAGES/male0011.png
    ./CYBERFICTION-IMAGES/male0012.png
    ./CYBERFICTION-IMAGES/male0013.png
    ./CYBERFICTION-IMAGES/male0014.png
    ./CYBERFICTION-IMAGES/male0015.png
    ./CYBERFICTION-IMAGES/male0016.png
    ./CYBERFICTION-IMAGES/male0017.png
    ./CYBERFICTION-IMAGES/male0018.png
    ./CYBERFICTION-IMAGES/male0019.png
    ./CYBERFICTION-IMAGES/male0020.png
    ./CYBERFICTION-IMAGES/male0021.png
    ./CYBERFICTION-IMAGES/male0022.png
    ./CYBERFICTION-IMAGES/male0023.png
    ./CYBERFICTION-IMAGES/male0024.png
    ./CYBERFICTION-IMAGES/male0025.png
    ./CYBERFICTION-IMAGES/male0026.png
    ./CYBERFICTION-IMAGES/male0027.png
    ./CYBERFICTION-IMAGES/male0028.png
    ./CYBERFICTION-IMAGES/male0029.png
    ./CYBERFICTION-IMAGES/male0030.png
    ./CYBERFICTION-IMAGES/male0031.png
    ./CYBERFICTION-IMAGES/male0032.png
    ./CYBERFICTION-IMAGES/male0033.png
    ./CYBERFICTION-IMAGES/male0034.png
    ./CYBERFICTION-IMAGES/male0035.png
    ./CYBERFICTION-IMAGES/male0036.png
    ./CYBERFICTION-IMAGES/male0037.png
    ./CYBERFICTION-IMAGES/male0038.png
    ./CYBERFICTION-IMAGES/male0039.png
    ./CYBERFICTION-IMAGES/male0040.png
    ./CYBERFICTION-IMAGES/male0041.png
    ./CYBERFICTION-IMAGES/male0042.png
    ./CYBERFICTION-IMAGES/male0043.png
    ./CYBERFICTION-IMAGES/male0044.png
    ./CYBERFICTION-IMAGES/male0045.png
    ./CYBERFICTION-IMAGES/male0046.png
    ./CYBERFICTION-IMAGES/male0047.png
    ./CYBERFICTION-IMAGES/male0048.png
    ./CYBERFICTION-IMAGES/male0049.png
    ./CYBERFICTION-IMAGES/male0050.png
    `; 
    return data.split("\n")[index];
  }

const frameCount = 50;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    //   set start end according to preference
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}

ScrollTrigger.create({

  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
//   set start end according to preference
  start: `top top`,
  end: `600% top`,
});











gsap.to("#page1",{
    scrollTrigger:{
        trigger:`page1`,
        start: `top top`,
        end:`bottom top`,
        markers:true,
        pin:true,
        scroller:`#main`
    }
})
gsap.to("#page2",{
    scrollTrigger:{
        trigger:`page2`,
        start: `top top`,
        end:`bottom top`,
        markers:true,
        pin:true,
        scroller:`#main`
    }
})
gsap.to("#page2",{
    scrollTrigger:{
        trigger:`page2`,
        start: `top top`,
        end:`bottom top`,
        markers:true,
        pin:true,
        scroller:`#main`
    }
})