import * as THREE from "three";

const digitiseVertexShader = /* glsl */ `
  #include <common>
  #include <morphtarget_pars_vertex>

  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vWorldPosition;

  void main() {
    vUv = uv;

    #include <begin_vertex>
    #include <morphtarget_vertex>
    #include <project_vertex>

    vNormal = normalize(normalMatrix * normal);
    vWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;
  }
`;

const digitiseFragmentShader = /* glsl */ `
  uniform sampler2D uPaperTex;
  uniform sampler2D uUiTex;
  uniform float uProgress;     // 0.0 (all paper) -> 1.0 (all UI)
  uniform vec3 uSignalColor;   // #22C3EE
  uniform float uRadius;       // Corner radius for card shape (0.0 to 0.08)
  uniform float uAspect;       // Card aspect ratio (0.5 for 1:2)

  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vWorldPosition;

  // Signed distance function for rounded rectangle
  float roundedBoxSDF(vec2 p, vec2 b, float r) {
    vec2 d = abs(p) - b + vec2(r);
    return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - r;
  }

  void main() {
    vec2 uv = vUv;

    // Flip V if texture UV needs vertical alignment
    vec4 paperCol = texture2D(uPaperTex, uv);
    vec4 uiCol = texture2D(uUiTex, uv);

    // Digitise sweep threshold: sweeps from hinge (top v=1) down to free edge (v=0)
    float sweepPos = 1.0 - uProgress;
    float bandWidth = 0.035;

    // Pulse/line at the boundary
    float distToEdge = abs(uv.y - sweepPos);
    float sweepBand = smoothstep(bandWidth, 0.0, distToEdge);

    // Transition from paper to UI
    float isUi = step(sweepPos, uv.y);
    vec4 col = mix(paperCol, uiCol, isUi);

    // Cyan glowing sweep edge during active transition
    if (uProgress > 0.01 && uProgress < 0.99) {
      col.rgb += uSignalColor * sweepBand * 1.6;
    }

    // Rounded rectangle corner clipping as card forms
    if (uRadius > 0.001) {
      vec2 centered = uv - vec2(0.5);
      vec2 p = vec2(centered.x * uAspect, centered.y);
      vec2 b = vec2(0.5 * uAspect, 0.5);
      float dist = roundedBoxSDF(p, b, uRadius * uAspect);
      float alpha = 1.0 - smoothstep(-0.002, 0.002, dist);
      col.a *= alpha;
      if (col.a < 0.05) discard;
    }

    // Studio lighting interaction
    vec3 lightDir = normalize(vec3(0.4, 0.9, 0.6));
    float diff = clamp(dot(vNormal, lightDir), 0.65, 1.0);
    col.rgb *= diff;

    gl_FragColor = col;
  }
`;

export function createDigitiseMaterial(
  paperTexture: THREE.Texture,
  uiTexture: THREE.Texture
): THREE.ShaderMaterial {
  paperTexture.wrapS = THREE.ClampToEdgeWrapping;
  paperTexture.wrapT = THREE.ClampToEdgeWrapping;
  uiTexture.wrapS = THREE.ClampToEdgeWrapping;
  uiTexture.wrapT = THREE.ClampToEdgeWrapping;

  const mat = new THREE.ShaderMaterial({
    vertexShader: digitiseVertexShader,
    fragmentShader: digitiseFragmentShader,
    uniforms: {
      uPaperTex: { value: paperTexture },
      uUiTex: { value: uiTexture },
      uProgress: { value: 0.0 },
      uSignalColor: { value: new THREE.Color("#22C3EE") },
      uRadius: { value: 0.0 },
      uAspect: { value: 0.5 },
    },
    transparent: true,
    side: THREE.DoubleSide,
  });

  return mat;
}
