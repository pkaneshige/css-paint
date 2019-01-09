class CheckerboardPainter {
  paint(ctx, geom, properties) {
    const colors = ['black', 'white'];
    const size = 32;
    for(let y = 0; y < geom.height/size; y++) {
      for(let x = 0; x < geom.width/size; x++) {
        const color = colors[(x + y) % colors.length];
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.rect(x * size, y * size, size, size);
        ctx.fill();
      }
    }
  }
}

registerPaint('checkerboard', CheckerboardPainter);

class HudsonBayPainter {
  paint(ctx, geom, properties) {
    const colors = ['#EDF4FB', '#2B3B6A', '#E5B137', '#C52447', '#206949'];
    const size = 32;
    for(let y = 0; y < geom.height/size; y++) {
      for(let x = 0; x < geom.width/size; x++) {
        const color = colors[(x + y) % colors.length];
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.rect(x * size, y * size, size, size);
        ctx.fill();
      }
    }
  }
}

registerPaint('hudsonBay', HudsonBayPainter);

class PlaceholderPainter {
  paint(ctx, geom) {
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#fff';

    // Draw line from top left to bottom right
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(geom.width, geom.height);
    ctx.stroke();

    // Draw line from top right to bottom left
    ctx.beginPath();
    ctx.moveTo(geom.width, 0);
    ctx.lineTo(0, geom.height);
    ctx.stroke();
  }
}

registerPaint('placeholder', PlaceholderPainter);