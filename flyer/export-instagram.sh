#!/bin/bash
# Exporta instagram.html a PNG 1080x1350 (una imagen por slide).
set -e
cd "$(dirname "$0")"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
mkdir -p instagram
for i in 1 2 3 4; do
  # virtual-time-budget: sin esto captura antes de que cargue Space Mono
  "$CHROME" --headless --disable-gpu --hide-scrollbars \
    --virtual-time-budget=5000 \
    --window-size=1080,1350 --screenshot="instagram/slide-$i.png" \
    "file://$PWD/instagram.html#s$i" 2>/dev/null
done
echo "OK -> flyer/instagram/"
