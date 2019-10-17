/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
export default class AppModel {
  cloneCanvas(element) {
    // create a new canvas
    const newCanvas = document.querySelectorAll('.canvas-mini');
    const newContext = newCanvas[element].getContext('2d');

    const oldCanvas = document.querySelectorAll('#canvas-basic');

    // set dimensions
    newCanvas[element].width = oldCanvas[element].width;
    newCanvas[element].height = oldCanvas[element].height;

    // apply the old canvas to the new one
    newContext.drawImage(oldCanvas[element], 0, 0);
  }

  copyCanvas(index) {
    const arrayCanvasFrames = document.querySelectorAll('.canvas-mini');
    const arrayCanvasBasic = document.querySelectorAll('#canvas-basic');

    const contextCanvasFrame = arrayCanvasFrames[index + 1].getContext('2d');
    const contextCanvasBasic = arrayCanvasBasic[index + 1].getContext('2d');

    arrayCanvasFrames[index + 1].width = arrayCanvasFrames[index].width;
    arrayCanvasFrames[index + 1].height = arrayCanvasBasic[index].height;

    arrayCanvasBasic[index + 1].width = arrayCanvasBasic[index].width;
    arrayCanvasBasic[index + 1].height = arrayCanvasBasic[index].height;

    contextCanvasFrame.drawImage(arrayCanvasFrames[index], 0, 0);
    contextCanvasBasic.drawImage(arrayCanvasBasic[index], 0, 0);
  }

  static cloneCanvas(element) {
    // create a new canvas
    const newCanvas = document.querySelectorAll('.canvas-mini');
    const newContext = newCanvas[element].getContext('2d');

    const oldCanvas = document.querySelectorAll('#canvas-basic');

    // set dimensions
    newCanvas[element].width = oldCanvas[element].width;
    newCanvas[element].height = oldCanvas[element].height;

    // apply the old canvas to the new one
    newContext.drawImage(oldCanvas[element], 0, 0);
  }


  drawPen(lineWidth, element) {
    const canvasBasic = document.querySelectorAll('#canvas-basic');
    const ctx = canvasBasic[element].getContext('2d');
    // document.addEventListener('contextmenu', event => event.preventDefault());
    canvasBasic[element].onmousedown = function onmousedown(event) {
      const colorCurrentFirst = document.querySelector('.first-current-color');
      let color = colorCurrentFirst.value;
      if (event.button === 2) {
        const colorCurrentSecond = document.querySelector('.second-current-color');
        color = colorCurrentSecond.value;
      }

      ctx.beginPath();
      const x = event.offsetX;
      const y = event.offsetY;
      ctx.strokeStyle = color;
      ctx.lineCap = 'round';
      ctx.lineWidth = lineWidth;
      ctx.moveTo(x, y);
      canvasBasic[element].onmousemove = function onmousemove(e) {
        const xd = e.offsetX;
        const yd = e.offsetY;
        ctx.lineTo(xd, yd);
        ctx.stroke();
        AppModel.cloneCanvas(element);
      };
      canvasBasic[element].onmouseup = function onmouseup() {
        canvasBasic[element].onmousemove = null;
      };
    };
  }

  drawLine(lineWidth, element) {
    const canvasBasic = document.querySelectorAll('#canvas-basic');
    const ctx = canvasBasic[element].getContext('2d');
    document.addEventListener('contextmenu', event => event.preventDefault());
    canvasBasic[element].onmousedown = function onmousedown(event) {
      const colorCurrentFirst = document.querySelector('.first-current-color');
      let color = colorCurrentFirst.value;
      if (event.button === 2) {
        const colorCurrentSecond = document.querySelector('.second-current-color');
        color = colorCurrentSecond.value;
      }
      ctx.beginPath();
      const x = event.offsetX;
      const y = event.offsetY;
      ctx.strokeStyle = color;
      ctx.lineCap = 'round';
      ctx.lineWidth = lineWidth;
      const imageData = ctx.getImageData(0, 0, canvasBasic[element].width, canvasBasic[element].height);

      canvasBasic[element].onmousemove = function onmousemove(e) {
        ctx.putImageData(imageData, 0, 0);
        ctx.beginPath();
        const xd = e.offsetX;
        const yd = e.offsetY;
        ctx.moveTo(x, y);
        ctx.lineTo(xd, yd);
        ctx.stroke();
        AppModel.cloneCanvas(element);
      };
      canvasBasic[element].onmouseup = function onmouseup() {
        canvasBasic[element].onmousemove = null;
      };
    };
  }

  drawSquare(lineWidth, element) {
    const canvasBasic = document.querySelectorAll('#canvas-basic');
    const ctx = canvasBasic[element].getContext('2d');

    canvasBasic[element].onmousedown = function onmousedown(event) {
      const colorCurrentFirst = document.querySelector('.first-current-color');
      let color = colorCurrentFirst.value;
      if (event.button === 2) {
        const colorCurrentSecond = document.querySelector('.second-current-color');
        color = colorCurrentSecond.value;
      }
      ctx.beginPath();
      const x = event.offsetX;
      const y = event.offsetY;
      ctx.strokeStyle = color;
      ctx.lineCap = 'round';
      ctx.lineWidth = lineWidth;
      ctx.moveTo(x, y);
      const imageData = ctx.getImageData(0, 0, canvasBasic[element].width, canvasBasic[element].height);
      canvasBasic[element].onmousemove = function onmousemove(e) {
        ctx.putImageData(imageData, 0, 0);
        const xd = e.offsetX;
        const yd = e.offsetY;
        ctx.strokeRect(x, y, xd - x, yd - y);
        AppModel.cloneCanvas(element);
      };
      canvasBasic[element].onmouseup = function onmouseup() {
        canvasBasic[element].onmousemove = null;
      };
    };
  }

  drawEllipse(lineWidth, element) {
    const canvasBasic = document.querySelectorAll('#canvas-basic');
    const ctx = canvasBasic[element].getContext('2d');

    canvasBasic[element].onmousedown = function onmousedown(event) {
      const colorCurrentFirst = document.querySelector('.first-current-color');
      let color = colorCurrentFirst.value;
      if (event.button === 2) {
        const colorCurrentSecond = document.querySelector('.second-current-color');
        color = colorCurrentSecond.value;
      }
      ctx.beginPath();
      const xs = event.offsetX;
      const ys = event.offsetY;
      ctx.strokeStyle = color;
      ctx.lineCap = 'round';
      ctx.lineWidth = lineWidth;
      ctx.moveTo(xs, ys);
      const imageData = ctx.getImageData(0, 0, canvasBasic[element].width, canvasBasic[element].height);
      canvasBasic[element].onmousemove = function onmousemove(e) {
        ctx.putImageData(imageData, 0, 0);
        const xd = e.offsetX;
        const yd = e.offsetY;
        function drawEllipse(ctxS, x, y, w, h) {
          const kappa = 0.5522848;
          const ox = (w / 2) * kappa; // control point offset horizontal
          const oy = (h / 2) * kappa; // control point offset vertical
          const xe = x + w; // x-end
          const ye = y + h; // y-end
          const xm = x + w / 2; // x-middle
          const ym = y + h / 2; // y-middle

          ctxS.beginPath();
          ctxS.moveTo(x, ym);
          ctxS.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
          ctxS.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
          ctxS.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
          ctxS.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
          // ctx.closePath(); // not used correctly, see comments (use to close off open path)
          ctx.stroke();
        }

        drawEllipse(ctx, xs, ys, xd - xs, yd - ys);
        AppModel.cloneCanvas(element);
      };
      canvasBasic[element].onmouseup = function onmouseup() {
        canvasBasic[element].onmousemove = null;
      };
    };
  }

  drawVerticalMirror(lineWidth, element) {
    const canvasBasic = document.querySelectorAll('#canvas-basic');
    const ctx = canvasBasic[element].getContext('2d');

    canvasBasic[element].onmousedown = function onmousedown(event) {
      const colorCurrentFirst = document.querySelector('.first-current-color');
      let color = colorCurrentFirst.value;
      if (event.button === 2) {
        const colorCurrentSecond = document.querySelector('.second-current-color');
        color = colorCurrentSecond.value;
      }
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineCap = 'round';
      ctx.lineWidth = lineWidth;
      canvasBasic[element].onmousemove = function onmousemove(e) {
        const xd = e.offsetX;
        const yd = e.offsetY;
        ctx.moveTo(xd, yd);
        ctx.lineTo(xd, yd);
        ctx.stroke();
        function symmetry() {
          ctx.moveTo(canvasBasic[element].width - xd, yd);
          ctx.lineTo(canvasBasic[element].width - xd, yd);
          ctx.stroke();
        }
        symmetry();

        AppModel.cloneCanvas(element);
      };
      canvasBasic[element].onmouseup = function onmouseup() {
        canvasBasic[element].onmousemove = null;
      };
    };
  }

  moving(element) {
    const canvasBasic = document.querySelectorAll('#canvas-basic');
    const ctx = canvasBasic[element].getContext('2d');

    canvasBasic[element].onmousedown = function onmousedown(event) {
      const x = event.offsetX;
      const y = event.offsetY;
      const imageData = ctx.getImageData(0, 0, canvasBasic[element].width, canvasBasic[element].height);
      canvasBasic[element].onmousemove = function onmousemove(e) {
        const xd = e.offsetX;
        const yd = e.offsetY;
        ctx.putImageData(imageData, xd - x, yd - y);
        AppModel.cloneCanvas(element);
      };
      canvasBasic[element].onmouseup = function onmouseup() {
        canvasBasic[element].onmousemove = null;
      };
    };
  }


  getFrames() {
    const arrayLinks = [];
    const arrayPictures = [];
    const canvasBasic = document.querySelectorAll('#canvas-basic');
    canvasBasic.forEach((element) => {
      const picture = element.toDataURL();
      arrayLinks.push(picture);
    });

    arrayLinks.forEach((element) => {
      const img = new Image(); // Создаём новый объект Image
      img.src = element; // Устанавливаем путь к источнику
      arrayPictures.push(img);
    });

    return arrayPictures;
  }

  animation(array, frameRate) {
    let count = 0;

    const canvasAnimation = document.querySelector('.canvas-animation');
    const context = canvasAnimation.getContext('2d');
    const canvasMini = document.querySelector('.canvas-mini');

    canvasAnimation.width = canvasMini.width;
    canvasAnimation.height = canvasMini.height;

    const timerId = setInterval(() => {
      context.clearRect(0, 0, canvasAnimation.width, canvasAnimation.height);
      if (count < array.length) {
        context.drawImage(array[count], 0, 0);
        count += 1;
      } else {
        count = 0;
      }
    }, 1000 / frameRate);
    return timerId;
  }

  clearAnimation(timerId) {
    clearInterval(timerId);
  }

  // Функция определения порядкового номера кадра
  numberFrame() {
    const counterFrame = document.querySelectorAll('.counter');
    counterFrame.forEach((el, index) => {
      counterFrame[index].innerText = index + 1;
    });
  }

  paintBucket(element, color) {
    const canvas = document.querySelectorAll('#canvas-basic');
    const ctx = canvas[element].getContext('2d');

    function getPixelPos(x, y) {
      return (y * canvas[element].width + x) * 4;
    }

    function hexToRgb(hex) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      } : null;
    }

    const colrRGBA = hexToRgb(color);
    function matchStartColor(data, pos, startColor) {
      return (data[pos] === startColor.r
              && data[pos + 1] === startColor.g
              && data[pos + 2] === startColor.b
              && data[pos + 3] === startColor.a);
    }

    function colorPixel(dataPixel, pos, colorCurrent) {
      dataPixel[pos] = colorCurrent.r || 0;
      dataPixel[pos + 1] = colorCurrent.g || 0;
      dataPixel[pos + 2] = colorCurrent.b || 0;
      // eslint-disable-next-line no-prototype-builtins
      dataPixel[pos + 3] = colorCurrent.hasOwnProperty('a') ? colorCurrent.a : 255;
    }

    function floodFill(startX, startY, fillColor) {
      const dstImg = ctx.getImageData(0, 0, canvas[element].width, canvas[element].height);
      const dstData = dstImg.data;
      const startPos = getPixelPos(startX, startY);
      const startColor = {
        r: dstData[startPos],
        g: dstData[startPos + 1],
        b: dstData[startPos + 2],
        a: dstData[startPos + 3],
      };
      const todo = [[startX, startY]];

      while (todo.length) {
        const pos = todo.pop();
        const x = pos[0];
        let y = pos[1];
        let currentPos = getPixelPos(x, y);

        while ((y-- >= 0) && matchStartColor(dstData, currentPos, startColor)) {
          currentPos -= canvas[element].width * 4;
        }

        currentPos += canvas[element].width * 4;
        ++y;
        let reachLeft = false;
        let reachRight = false;

        while ((y++ < canvas[element].height - 1) && matchStartColor(dstData, currentPos, startColor)) {
          colorPixel(dstData, currentPos, fillColor);
          if (x > 0) {
            if (matchStartColor(dstData, currentPos - 4, startColor)) {
              if (!reachLeft) {
                todo.push([x - 1, y]);
                reachLeft = true;
              }
            } else if (reachLeft) {
              reachLeft = false;
            }
          }

          if (x < canvas[element].width - 1) {
            if (matchStartColor(dstData, currentPos + 4, startColor)) {
              if (!reachRight) {
                todo.push([x + 1, y]);
                reachRight = true;
              }
            } else if (reachRight) {
              reachRight = false;
            }
          }

          currentPos += canvas[element].width * 4;
        }
      }

      ctx.putImageData(dstImg, 0, 0);
      AppModel.cloneCanvas(element);
    }
    function startPositiion(e) {
      const startX = e.offsetX;
      const startY = e.offsetY;
      floodFill(startX, startY, colrRGBA);
      canvas[element].removeEventListener('click', startPositiion);
    }

    canvas[element].addEventListener('click', startPositiion);
  }

  erasing(element) {
    const canvasBasic = document.querySelectorAll('#canvas-basic');
    const ctx = canvasBasic[element].getContext('2d');

    canvasBasic[element].onmousedown = function onmousedown() {
      canvasBasic[element].onmousemove = function onmousemove(e) {
        const xd = e.offsetX;
        const yd = e.offsetY;
        ctx.clearRect(xd - 2, yd - 2, 4, 4);
        AppModel.cloneCanvas(element);
      };
      canvasBasic[element].onmouseup = function onmouseup() {
        canvasBasic[element].onmousemove = null;
      };
    };
  }

  getPicture(element) {
    const canvasBasic = document.querySelectorAll('#canvas-basic');
    const picture = canvasBasic[element].toDataURL();
    const img = new Image();
    img.src = picture;
    return img;
  }

  turn(ctx, image, fromX, fromY, angle, element) {
    ctx.clearRect(0, 0, image.width, image.height);
    ctx.save();
    ctx.translate(fromX + image.width / 2, fromY + image.height / 2);
    ctx.rotate(angle);
    ctx.translate(-(fromX + image.width / 2), -(fromY + image.height / 2));
    ctx.drawImage(image, fromX, fromY);
    ctx.restore();
    AppModel.cloneCanvas(element);
  }

  reflection(context, canvasBasic, img, element) {
    context.clearRect(0, 0, canvasBasic.width, canvasBasic.height);
    context.save();
    context.scale(-1, 1);
    context.drawImage(img, 0, 0, canvasBasic.width * -1, canvasBasic.height);
    context.restore();
    AppModel.cloneCanvas(element);
  }

  paintBackground(myColor, context, canvasBasic, element) {
    context.rect(0, 0, canvasBasic.width, canvasBasic.height);
    context.fillStyle = myColor;
    context.fill();
    AppModel.cloneCanvas(element);
  }
}
