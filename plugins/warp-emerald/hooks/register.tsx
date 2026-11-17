import type { Register, ThemeSetArgs } from 'claude-code'

import { makeColors } from './make-colors.js'

const PLUGIN = 'warp-emerald'
const SCENE_ID = 'emerald-grid'
const COMMAND = 'warp-emerald'

// design.md: Warp Future Emerald V3。背景 #061a0c、アクセント #00ff41、白文字。ダーク専用。
const { theme, problems } = makeColors({
  label: 'Warp Future Emerald',
  only: 'dark',
  roles: { accent: '#00ff41', danger: '#ff4d5e', success: '#2ee6a8', warning: '#ffb020', pro: '#b48cff' },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#061a0c',
        'surface-1': '#0a2112',
        'surface-2': '#0d2616',
        'surface-3': '#0e2817',
        'text-primary': '#ffffff',
        'text-secondary': '#cfe0d3',
        'text-muted': '#94ad9a',
      },
    },
  },
})

const LOOK: ThemeSetArgs = {
  colors: theme,
  // 半透明パネル越しにグリッドとカニが透ける。ぼかし 1.5・不透明度 55%（背景が暗いので文字は読める）。
  backdrop: { scene: SCENE_ID, glass: { blur: 1.5, tint: '#061a0c', opacity: 0.55 } },
}

// 実ピクセル基準（viewBox なし）。18px グリッド + 90px ごとの補助線、ゆっくり降りる走査線、
// 右上の HUD（右端から固定距離）、入力バーの上を行き来するカニ（窓の中央・下から 100pt に足）。
const BAR_TOP = 100
const SCENE = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
<style>
.scan{transform-box:view-box;animation:scan 11s linear infinite}
@keyframes scan{from{transform:translateY(-25%)}to{transform:translateY(110%)}}
.cur{animation:blink 1.1s steps(1) infinite}
@keyframes blink{50%{opacity:0}}
.dot{animation:pulse 2.4s ease-in-out infinite}
@keyframes pulse{50%{opacity:.35}}
.hud{font-family:'JetBrains Mono','Fira Code',Menlo,'Courier New',monospace;letter-spacing:2px}
.walk{animation:walk 18s ease-in-out infinite}
@keyframes walk{0%,6%{transform:translateX(380px)}44%,56%{transform:translateX(-380px)}94%,100%{transform:translateX(380px)}}
.la{animation:legs .5s steps(1) infinite}
.lb{animation:legs .5s steps(1) -.25s infinite}
@keyframes legs{50%{transform:translateY(-18px)}}
.bob{animation:bob .5s steps(1) infinite}
@keyframes bob{50%{transform:translateY(6px)}}
.eye{transform-box:fill-box;transform-origin:center;animation:wink 5s infinite}
@keyframes wink{0%,93%,100%{transform:scaleY(1)}96%{transform:scaleY(.1)}}
@media (max-width:900px){.walk{animation-name:walkS}}
@keyframes walkS{0%,6%{transform:translateX(120px)}44%,56%{transform:translateX(-120px)}94%,100%{transform:translateX(120px)}}
@media (prefers-reduced-motion:reduce){.scan,.cur,.dot,.walk,.la,.lb,.bob,.eye{animation:none}}
</style>
<defs>
<pattern id="g" width="18" height="18" patternUnits="userSpaceOnUse"><path d="M18 0H0V18" fill="none" stroke="#ffffff" stroke-opacity=".08" stroke-width=".6"/></pattern>
<pattern id="G" width="90" height="90" patternUnits="userSpaceOnUse"><path d="M90 0H0V90" fill="none" stroke="#ffffff" stroke-opacity=".08" stroke-width=".6"/></pattern>
<radialGradient id="glow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#00ff41" stop-opacity=".10"/><stop offset="1" stop-color="#00ff41" stop-opacity="0"/></radialGradient>
<linearGradient id="beam" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#00ff41" stop-opacity="0"/><stop offset=".85" stop-color="#00ff41" stop-opacity=".05"/><stop offset="1" stop-color="#00ff41" stop-opacity=".16"/></linearGradient>
</defs>
<rect width="100%" height="100%" fill="#061a0c"/>
<ellipse cx="0" cy="0" rx="55%" ry="70%" fill="url(#glow)"/>
<ellipse cx="100%" cy="100%" rx="50%" ry="60%" fill="url(#glow)" opacity=".6"/>
<rect width="100%" height="100%" fill="url(#g)"/>
<rect width="100%" height="100%" fill="url(#G)"/>
<g class="scan"><rect x="0" y="0" width="100%" height="200" fill="url(#beam)"/><rect x="0" y="199" width="100%" height="1" fill="#00ff41" fill-opacity=".22"/></g>
<svg x="100%" y="0" overflow="visible">
<g class="hud" transform="translate(-330 70)">
<rect x="-18" y="-26" width="300" height="104" rx="6" fill="#ffffff" fill-opacity=".03" stroke="#ffffff" stroke-opacity=".08" stroke-width=".5"/>
<text x="0" y="0" font-size="13" fill="#00ff41"><tspan class="dot">■</tspan> SYS.ONLINE</text>
<text x="0" y="24" font-size="12" fill="#ffffff" fill-opacity=".55">WARP // EMERALD V3</text>
<text x="0" y="52" font-size="14" fill="#00ff41">&gt; <tspan class="cur">█</tspan></text>
</g>
</svg>
<svg x="50%" y="100%" overflow="visible">
<g transform="translate(-28 ${-(BAR_TOP + 36)})"><g class="walk"><g transform="scale(.11)" shape-rendering="crispEdges">
<g class="la"><rect fill="#C96A42" x="65" y="260" width="35" height="70"/><rect fill="#C96A42" x="325" y="260" width="35" height="70"/></g>
<g class="lb"><rect fill="#C96A42" x="145" y="260" width="35" height="70"/><rect fill="#C96A42" x="405" y="260" width="35" height="70"/></g>
<g class="bob">
<rect fill="#C96A42" x="40" y="0" width="420" height="260"/>
<rect fill="#C96A42" x="-50" y="150" width="110" height="60"/>
<rect fill="#C96A42" x="440" y="150" width="110" height="60"/>
<rect class="eye" fill="#1a1a1a" x="110" y="60" width="40" height="80"/>
<rect class="eye" fill="#1a1a1a" x="340" y="60" width="40" height="80"/>
</g>
</g></g></g>
</svg>
</svg>`

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    const unpainted = problems.find(line => line.startsWith("Desktop won't paint"))

    if (unpainted !== undefined) {
      void $.ui.toast(`${PLUGIN}: ${unpainted}`)
    }

    // 登録に失敗してもテーマは適用する。
    try {
      await $.command.register({
        name: COMMAND,
        description: 'Warp Emerald テーマをこのセッションに適用する（"off" で解除）',
      })
    } catch (error) {
      void $.ui.toast(`${PLUGIN}: /${COMMAND} is not available (${String(error)})`)
    }

    const set = await $.theme.set(LOOK)

    if (!set.isDrawn) {
      $.ui.status(`${PLUGIN}: ${set.reason}`)
    }

    return next(e)
  })

  // /warp-emerald で再適用、/warp-emerald off で解除。ほかのテーマプラグインが消したときに戻す用。
  on('command.run', { command: COMMAND }, async ($, e) => {
    if (e.args.trim().toLowerCase() === 'off') {
      await $.theme.clear()

      return { text: 'Warp Emerald を解除した。' }
    }

    const set = await $.theme.set(LOOK)

    return { text: set.isDrawn ? 'Warp Emerald を適用した。' : `適用したが描画されない: ${set.reason}` }
  })

  on('ui.render', { component: 'Backdrop' }, ($, e, next) => {
    if (e.props.plugin !== PLUGIN || e.props.scene !== SCENE_ID) {
      return next(e)
    }

    if (e.surface !== 'desktop' && e.surface !== 'mobile') {
      return next(e)
    }

    const { Svg } = $.ui.resolve(e)

    return <Svg source={SCENE} alt="エメラルドの方眼グリッドに緑の走査線、入力欄の上をドット絵のカニが行き来する" />
  })
}
