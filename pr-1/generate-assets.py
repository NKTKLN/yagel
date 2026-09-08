#!/usr/bin/env python3
"""Пересборка логотипных ассетов Ягеля по образцам из brand-board.html.

Знак берётся из <symbol id="mark"> борда — он, в свою очередь, повторяет
ICON_SEEDLING_16X16 из прошивки. Надпись логоблока переводится в кривые:
SVG с <text> зависит от наличия Golos Text у зрителя и на GitHub отрисуется
чужим шрифтом.

    python3 generate-assets.py [каталог assets]

Требует: Pillow, fonttools и Golos Text в ~/.local/share/fonts/golos/GolosText.ttf
(вариативный файл с github.com/google/fonts, ofl/golostext).
"""
import sys
from pathlib import Path

from PIL import Image
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer

INK, PAPER = "#14181A", "#EBE9E2"   # палитра бренда; #F6F5F0 из борда — оттенок
                                    # подложки интерфейса, в палитру не входит
FONT = Path.home() / ".local/share/fonts/golos/GolosText.ttf"

# --- геометрия логоблока: значения из brand-board.html, секция 05 ---
TILE, RADIUS, MARK, GAP, FSIZE, TRACK, PAD = 40, 8, 28, 10, 20, 0.14, 12
CAP_RATIO = 0.7000                    # sCapHeight / unitsPerEm у Golos Text

assets = Path(sys.argv[1] if len(sys.argv) > 1 else Path(__file__).parent / "assets")

# --- знак: сетка 16x16, x/y/ширина/высота. Источник — ICON_SEEDLING_16X16 ---
RECTS = [
    (10, 2, 4, 1),
    (2, 3, 3, 1),
    (9, 3, 5, 1),
    (2, 4, 5, 1),
    (8, 4, 6, 1),
    (2, 5, 6, 1),
    (9, 5, 5, 1),
    (2, 6, 6, 1),
    (10, 6, 3, 1),
    (3, 7, 6, 1),
    (10, 7, 1, 1),
    (4, 8, 5, 1),
    (6, 9, 3, 1),
    (7, 10, 2, 1),
    (7, 11, 2, 1),
    (7, 12, 2, 1),
    (7, 13, 2, 1),
]

HEAD = ('<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" '
        'viewBox="0 0 {vw} {vh}" role="img" aria-label="{alt}">\n  <title>{title}</title>\n')


def mark_group(fill, scale=1, dx=0, dy=0):
    """Знак ОДНИМ путём, а не набором <rect>.

    Отдельные прямоугольники при дробном масштабе (в логоблоке это 28/16 = 1.75)
    сглаживаются независимо, и на общих границах остаются светлые швы — знак
    выглядит полосатым. Внутри одного пути покрытие считается один раз по
    объединению фигур, поэтому швов не возникает ни на каком масштабе.
    """
    d = "".join(
        f"M{x*scale+dx:g} {y*scale+dy:g}"
        f"H{(x+w)*scale+dx:g}V{(y+h)*scale+dy:g}H{x*scale+dx:g}Z"
        for x, y, w, h in RECTS)
    return f'<path fill="{fill}" shape-rendering="crispEdges" d="{d}"/>'


def write_mark(name, fill, alt):
    svg = (HEAD.format(w=16, h=16, vw=16, vh=16, alt=alt, title=alt)
           + "  <!-- Сетка 16x16 из firmware/src/icons.h. Не сглаживать, не растягивать. -->\n  "
           + mark_group(fill) + "\n</svg>\n")
    (assets / name).write_text(svg, encoding="utf-8")


# --- надпись в кривые ---
def wordmark_paths(text, size, tracking):
    """Глифы Golos Text 800 как <path>, с трекингом. Возвращает (svg, ширина, baseline)."""
    font = instancer.instantiateVariableFont(TTFont(FONT), {"wght": 800}, inplace=False)
    upm = font["head"].unitsPerEm
    gs = font.getGlyphSet()
    cmap = font.getBestCmap()
    hmtx = font["hmtx"]
    k = size / upm
    track = tracking * size

    parts, x = [], 0.0
    for ch in text:
        gname = cmap[ord(ch)]
        pen = SVGPathPen(gs, ntos=lambda v: f"{v:.2f}")
        gs[gname].draw(pen)
        d = pen.getCommands()
        if d:
            parts.append(f'<path transform="translate({x:.2f} 0) scale({k:.6f} {-k:.6f})" d="{d}"/>')
        x += hmtx[gname][0] * k + track
    width = x - track                      # висячий трекинг после последней буквы не считаем
    ascent = font["OS/2"].sTypoAscender * k
    font.close()
    return "".join(parts), width, ascent


def write_lockup(name, bg, tile_fill, mark_fill, word_fill, alt):
    glyphs, tw, _ = wordmark_paths("ЯГЕЛЬ", FSIZE, TRACK)
    w = PAD + TILE + GAP + tw + PAD
    h = PAD + TILE + PAD
    inset = (TILE - MARK) / 2
    scale = MARK / 16
    cap = FSIZE * CAP_RATIO
    baseline = h / 2 + cap / 2
    plate = f'<rect width="{w:.2f}" height="{h}" rx="{RADIUS+4}" fill="{bg}"/>' if bg else ""
    svg = (HEAD.format(w=f"{w:.0f}", h=h, vw=f"{w:.2f}", vh=h, alt=alt, title=alt)
           + f"  <!-- Геометрия из brand-board.html: плашка {TILE}x{TILE} r{RADIUS}, знак {MARK},\n"
           + f"       зазор {GAP}, надпись Golos Text 800 кегль {FSIZE} трекинг +{TRACK}em. Кривые. -->\n"
           + f"  {plate}\n"
           + f'  <rect x="{PAD}" y="{PAD}" width="{TILE}" height="{TILE}" rx="{RADIUS}" fill="{tile_fill}"/>\n'
           + "  " + mark_group(mark_fill, scale, PAD + inset, PAD + inset) + "\n"
           + f'  <g fill="{word_fill}" transform="translate({PAD+TILE+GAP} {baseline:.2f})">{glyphs}</g>\n'
           + "</svg>\n")
    (assets / name).write_text(svg, encoding="utf-8")
    return w, h


# --- растры: рисуем сетку 16x16 и увеличиваем ближайшим соседом ---
def png(name, size, fg, bg=None, plate=None):
    ink = tuple(int(fg[i:i+2], 16) for i in (1, 3, 5)) + (255,)
    base = (tuple(int(bg[i:i+2], 16) for i in (1, 3, 5)) + (255,)) if bg else (0, 0, 0, 0)
    im = Image.new("RGBA", (16, 16), base)
    for x, y, w, h in RECTS:
        for yy in range(y, y + h):
            for xx in range(x, x + w):
                im.putpixel((xx, yy), ink)
    im = im.resize((size, size), Image.NEAREST)
    if plate:
        # Плашка во весь холст: защитное поле уже заложено в сетку знака —
        # 2 пустых пикселя по краю 16x16, то есть ровно 1/8 стороны.
        from PIL import ImageDraw
        card = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        ImageDraw.Draw(card).rounded_rectangle(
            [0, 0, size - 1, size - 1], radius=size // 5,
            fill=tuple(int(plate[i:i+2], 16) for i in (1, 3, 5)) + (255,))
        card.alpha_composite(im)
        im = card
    im.save(assets / name)


write_mark("yagel-mark.svg", INK, "Ягель — знак ростка, чернила")
write_mark("yagel-mark-inverse.svg", PAPER, "Ягель — знак ростка, выворотка")
w1, h1 = write_lockup("yagel-lockup.svg", PAPER, INK, PAPER, INK,
                      "Ягель — логоблок: знак ростка и надпись ЯГЕЛЬ")
_ = write_lockup("yagel-lockup-inverse.svg", INK, PAPER, INK, PAPER,
                      "Ягель — логоблок, выворотка")

for s in (16, 32, 64, 256):
    png(f"yagel-mark-{s}.png", s, INK)
for s in (64, 256):
    png(f"yagel-mark-inverse-{s}.png", s, PAPER)
png("yagel-mark-512-paper.png", 512, INK, plate=PAPER)

print(f"логоблок: {w1:.0f}×{h1}")
print("готово:", ", ".join(sorted(p.name for p in assets.iterdir())))
